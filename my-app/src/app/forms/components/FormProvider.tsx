import React from 'react';
import { FormProvider as RHFProvider, UseFormReturn } from 'react-hook-form';

export interface FormProviderProps<T> {
  form: UseFormReturn<T>;
  children: React.ReactNode;
}

export function FormProvider<T>({ form, children }: FormProviderProps<T>) {
  return <RHFProvider {...form}>{children}</RHFProvider>;
}
