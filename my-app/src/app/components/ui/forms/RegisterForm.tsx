import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input, PasswordInput } from '@app/components/forms';
import { Button } from '../Button';
import clsx from 'clsx';

const schema = z
  .object({
    name: z.string().min(1, 'Required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Min 6 characters'),
    confirmPassword: z.string().min(6),
  })
  .refine((d) => d.password === d.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords must match',
  });

export type RegisterFormData = z.infer<typeof schema>;

export interface RegisterFormProps {
  onSubmit?: (data: RegisterFormData) => void;
  className?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, className }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(schema) });

  const submit = handleSubmit((data) => onSubmit?.(data));

  return (
    <form onSubmit={submit} className={clsx('space-y-4', className)}>
      <Input name="name" label="Name" control={control} errorMessage={errors.name?.message} />
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
      <PasswordInput
        name="confirmPassword"
        label="Confirm Password"
        control={control}
        errorMessage={errors.confirmPassword?.message}
      />
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};
