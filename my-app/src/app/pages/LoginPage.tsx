import React from 'react';
import { PageTemplate } from '@/app/components/layout';
import { FormProvider, Input } from '@/app/forms/components';
import { useFormWithSchema, useServerValidation } from '@/app/forms/hooks';
import { LoginFormSchema, LoginFormData } from '@/app/forms/schemas';

export function LoginPage() {
  const form = useFormWithSchema<LoginFormData>(LoginFormSchema);

  const onSubmit = (data: LoginFormData) => {
    console.log('login', data);
  };

  useServerValidation({}, form.setError);

  return (
    <PageTemplate title="Login">
      <FormProvider form={form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Password" type="password" />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </FormProvider>
    </PageTemplate>
  );
}
