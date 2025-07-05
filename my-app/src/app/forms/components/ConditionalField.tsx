import React from 'react';
import { useWatch, useFormContext } from 'react-hook-form';

interface ConditionalFieldProps {
  name: string;
  when: (value: any) => boolean;
  children: React.ReactNode;
}

export function ConditionalField({ name, when, children }: ConditionalFieldProps) {
  const { control } = useFormContext();
  const value = useWatch({ control, name });

  if (!when(value)) {
    return null;
  }

  return <>{children}</>;
}
