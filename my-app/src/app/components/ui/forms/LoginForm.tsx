import React from 'react';
import { useFormWithSchema } from '@app/forms/hooks';
import { LoginFormSchema, LoginFormData } from '@app/forms/schemas';
import { Input, PasswordInput } from '@app/components/forms';
import { Button } from '../Button';
import clsx from 'clsx';

export interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => void;
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, className }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormWithSchema<LoginFormData>(LoginFormSchema);

  const submit = handleSubmit((data) => onSubmit?.(data));

  return (
    <form onSubmit={submit} className={clsx('space-y-4', className)}>
      <Input
        name="email"
        label="Email"
        type="email"
        control={control}
        errorMessage={errors.email?.message}
      />
      <PasswordInput
        name="password"
        label="Password"
        control={control}
        errorMessage={errors.password?.message}
      />
      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};
