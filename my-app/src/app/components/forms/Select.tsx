import React from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  options: Option[];
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  onBlur?: () => void;
  errorMessage?: string;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
  variant?: 'outline' | 'filled' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      name,
      label,
      placeholder,
      options,
      value,
      defaultValue,
      onChange,
      onBlur,
      errorMessage,
      rules,
      control,
      className,
      variant = 'outline',
      size = 'md',
      ...rest
    },
    ref,
  ) => {
    const { field } = useController({ name, control, rules, defaultValue });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      field.onChange(e);
      onChange?.(e.target.value);
    };

    const classes = clsx(
      'block w-full rounded focus:outline-none focus:ring',
      variant === 'filled' && 'bg-gray-100',
      variant === 'ghost' && 'bg-transparent border-none',
      variant === 'outline' && 'border',
      size === 'sm' && 'px-2 py-1 text-sm',
      size === 'md' && 'px-3 py-2',
      size === 'lg' && 'px-4 py-3 text-lg',
      className,
    );

    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={name} className="block text-sm font-medium">
            {label}
          </label>
        )}
        <motion.select
          id={name}
          ref={ref}
          {...field}
          {...rest}
          value={value ?? field.value}
          onChange={handleChange}
          onBlur={(e) => {
            field.onBlur();
            onBlur?.();
          }}
          aria-invalid={!!errorMessage}
          className={classes}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </motion.select>
        {errorMessage && (
          <p role="alert" className="text-red-600 text-sm">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);
Select.displayName = 'Select';
