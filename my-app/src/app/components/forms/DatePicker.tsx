import React from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface DatePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  onBlur?: () => void;
  errorMessage?: string;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      name,
      label,
      placeholder,
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
      onChange?.(e.target.value);
    };

    return (
      <div className="space-y-1">
        {label && (
          <label htmlFor={name} className="block text-sm font-medium">
            {label}
          </label>
        )}
        <motion.input
          type="date"
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
          placeholder={placeholder}
          aria-invalid={!!errorMessage}
          className={clsx('block w-full border rounded px-3 py-2', className)}
        />
        {errorMessage && (
          <p role="alert" className="text-red-600 text-sm">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);
DatePicker.displayName = 'DatePicker';
