import React from 'react';
import { useFormContext } from 'react-hook-form';

interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  name: string;
  label: string;
  options: Option[];
}

export function Select({ name, label, options }: SelectProps) {
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
      <select
        id={name}
        {...register(name)}
        className="form-select w-full"
        aria-invalid={!!error}
        aria-describedby={`${name}-error`}
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${name}-error`} className="text-red-600 text-sm mt-1">
          {error}
        </p>
      )}
    </div>
  );
}
