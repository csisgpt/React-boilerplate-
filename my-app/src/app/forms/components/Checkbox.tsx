import React from 'react';
import { useFormContext } from 'react-hook-form';

interface CheckboxProps {
  name: string;
  label: string;
}

export function Checkbox({ name, label }: CheckboxProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="mb-4 flex items-center">
      <input
        id={name}
        type="checkbox"
        {...register(name)}
        className="mr-2"
        aria-invalid={!!error}
        aria-describedby={`${name}-error`}
      />
      <label htmlFor={name}>{label}</label>
      {error && (
        <p id={`${name}-error`} className="text-red-600 text-sm mt-1 ml-2">
          {error}
        </p>
      )}
    </div>
  );
}
