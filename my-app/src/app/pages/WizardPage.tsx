import React, { useState } from 'react';
import { PageTemplate } from '@/app/components/layout';
import { FormProvider, Input } from '@/app/forms/components';
import { useFormWithSchema } from '@/app/forms/hooks';
import {
  WizardStep1Schema,
  WizardStep1Data,
  WizardStep2Schema,
  WizardStep2Data,
  WizardStep3Schema,
  WizardStep3Data,
} from '@/app/forms/schemas';

export function WizardPage() {
  const [step, setStep] = useState(0);
  const forms = [
    useFormWithSchema<WizardStep1Data>(WizardStep1Schema),
    useFormWithSchema<WizardStep2Data>(WizardStep2Schema),
    useFormWithSchema<WizardStep3Data>(WizardStep3Schema),
  ];

  const next = () => setStep(s => Math.min(s + 1, forms.length - 1));
  const back = () => setStep(s => Math.max(s - 1, 0));

  const onSubmitStep1 = (data: WizardStep1Data) => {
    console.log('step1', data);
    next();
  };
  const onSubmitStep2 = (data: WizardStep2Data) => {
    console.log('step2', data);
    next();
  };
  const onSubmitStep3 = (data: WizardStep3Data) => {
    console.log('complete', data);
  };

  const renderStep = () => {
    if (step === 0)
      return (
        <FormProvider form={forms[0]}>
          <form onSubmit={forms[0].handleSubmit(onSubmitStep1)}>
            <Input name="firstName" label="First Name" />
            <button type="submit" className="btn btn-primary">
              Next
            </button>
          </form>
        </FormProvider>
      );
    if (step === 1)
      return (
        <FormProvider form={forms[1]}>
          <form onSubmit={forms[1].handleSubmit(onSubmitStep2)}>
            <Input name="age" label="Age" type="number" />
            <div className="mt-4 flex justify-between">
              <button type="button" className="btn" onClick={back}>
                Back
              </button>
              <button type="submit" className="btn btn-primary">
                Next
              </button>
            </div>
          </form>
        </FormProvider>
      );
    return (
      <FormProvider form={forms[2]}>
        <form onSubmit={forms[2].handleSubmit(onSubmitStep3)}>
          <Checkbox name="confirm" label="Confirm" />
          <div className="mt-4 flex justify-between">
            <button type="button" className="btn" onClick={back}>
              Back
            </button>
            <button type="submit" className="btn btn-primary">
              Finish
            </button>
          </div>
        </form>
      </FormProvider>
    );
  };

  return <PageTemplate title="Wizard">{renderStep()}</PageTemplate>;
}
