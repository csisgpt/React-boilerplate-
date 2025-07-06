import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  WizardStep1Schema,
  WizardStep2Schema,
  WizardStep3Schema,
  WizardStep1Data,
  WizardStep2Data,
  WizardStep3Data,
} from '@app/forms/schemas';
import { Input, Checkbox, Button } from '@app/components/forms';
import clsx from 'clsx';

export interface MultiStepFormProps {
  onComplete?: (data: WizardStep1Data & WizardStep2Data & WizardStep3Data) => void;
  className?: string;
}

type FormData = WizardStep1Data & Partial<WizardStep2Data & WizardStep3Data>;

const schemas = [WizardStep1Schema, WizardStep2Schema, WizardStep3Schema];

export const MultiStepForm: React.FC<MultiStepFormProps> = ({ onComplete, className }) => {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<FormData>({ firstName: '' });

  const form = useForm<FormData>({
    resolver: zodResolver(schemas[step] as any),
    defaultValues: values,
  });

  const next = form.handleSubmit((vals) => {
    const newVals = { ...values, ...vals } as FormData;
    setValues(newVals);
    if (step < schemas.length - 1) {
      setStep(step + 1);
    } else {
      onComplete?.(newVals as any);
    }
  });

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <form onSubmit={next} className={clsx('space-y-4', className)}>
      {step === 0 && (
        <Input
          name="firstName"
          label="First Name"
          control={form.control}
          errorMessage={form.formState.errors.firstName?.message}
        />
      )}
      {step === 1 && (
        <Input
          name="age"
          type="number"
          control={form.control}
          label="Age"
          errorMessage={form.formState.errors.age?.message}
        />
      )}
      {step === 2 && (
        <Checkbox
          name="confirm"
          label="Confirm"
          control={form.control}
          errorMessage={form.formState.errors.confirm?.message}
        />
      )}
      <div className="flex gap-2">
        {step > 0 && (
          <Button type="button" onClick={back} className="flex-1">
            Back
          </Button>
        )}
        <Button type="submit" className="flex-1">
          {step < schemas.length - 1 ? 'Next' : 'Finish'}
        </Button>
      </div>
    </form>
  );
};
