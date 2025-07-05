import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';

interface InputProps {
  name: string;
  label: string;
  type?: string;
}

export function Input({ name, label, type = 'text' }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="mb-4">
      <label className="block mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        className="form-input w-full"
        aria-invalid={!!error}
        aria-describedby={`${name}-error`}
      />
      {error && (
        <p id={`${name}-error`} className="text-red-600 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
