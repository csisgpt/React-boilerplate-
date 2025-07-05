import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TextareaProps {
  name: string;
  label: string;
}

export function Textarea({ name, label }: TextareaProps) {
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
      <textarea
        id={name}
        {...register(name)}
        className="form-textarea w-full"
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
