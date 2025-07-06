import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@app/components/forms';
import { Button } from '../Button';
import { PageHeader, Section } from '../wrappers';
import clsx from 'clsx';

const schema = z.object({ email: z.string().email() });
export type ForgotPasswordData = z.infer<typeof schema>;

export interface ForgotPasswordPageProps {
  className?: string;
  onSubmit?: (data: ForgotPasswordData) => void;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ className, onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<ForgotPasswordData>({ resolver: zodResolver(schema) });

  const submit = handleSubmit((d) => onSubmit?.(d));

  return (
    <main className={clsx('space-y-12', className)}>
      <PageHeader title="Forgot Password" />
      <Section>
        <form onSubmit={submit} className="space-y-4">
          <Input name="email" label="Email" type="email" control={control} errorMessage={errors.email?.message} />
          <Button type="submit" className="w-full">Send Reset Link</Button>
        </form>
      </Section>
    </main>
  );
};
