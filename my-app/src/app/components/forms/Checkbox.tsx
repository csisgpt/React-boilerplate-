import React from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface CheckboxProps {
  name: string;
  label?: string;
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (val: boolean) => void;
  onBlur?: () => void;
  errorMessage?: string;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      name,
      label,
      value,
      defaultValue,
      onChange,
      onBlur,
      errorMessage,
      rules,
      control,
      className,
      ...rest
    },
    ref,
  ) => {
    const { field } = useController({ name, control, rules, defaultValue });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      field.onChange(e);
      onChange?.(e.target.checked);
    };

    return (
      <div className="flex items-center space-x-2">
        <motion.input
          id={name}
          type="checkbox"
          ref={ref}
          {...field}
          {...rest}
          checked={value ?? field.value}
          onChange={handleChange}
          onBlur={(e) => {
            field.onBlur();
            onBlur?.();
          }}
          aria-invalid={!!errorMessage}
          className={clsx('rounded border', className)}
        />
        {label && (
          <label htmlFor={name} className="text-sm">
            {label}
          </label>
        )}
        {errorMessage && (
          <p role="alert" className="text-red-600 text-sm ml-2">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);
Checkbox.displayName = 'Checkbox';
