import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PageTemplate } from '@/app/layouts';
import { Input } from '@/app/components/forms';
import { Button } from '@/app/components/ui/Button';
import { useForm } from 'react-hook-form';

interface FormData { email: string }

export const ForgotPasswordPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [sent, setSent] = useState(false);

  const onSubmit = () => {
    setSent(true);
  };

  return (
    <PageTemplate title="Forgot Password" breadcrumbItems={[{ label: 'Home', to: '/' }, { label: 'Forgot Password' }]}>
      <Helmet>
        <title>Forgot Password – MyApp</title>
      </Helmet>
      {sent ? (
        <p>Check your email for reset instructions.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input type="email" label="Email" {...register('email', { required: 'Required' })} errorMessage={errors.email?.message} />
          <Button type="submit">Send Reset Link</Button>
        </form>
      )}
    </PageTemplate>
  );
};
