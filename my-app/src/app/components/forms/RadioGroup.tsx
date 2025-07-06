import React from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  name: string;
  label?: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (val: string) => void;
  onBlur?: () => void;
  errorMessage?: string;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      label,
      options,
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

    const handleChange = (val: string) => {
      field.onChange(val);
      onChange?.(val);
    };

    return (
      <div ref={ref} className={clsx('space-y-1', className)} {...rest}>
        {label && <p className="text-sm font-medium">{label}</p>}
        {options.map((opt) => (
          <label key={opt.value} className="flex items-center space-x-2">
            <motion.input
              type="radio"
              value={opt.value}
              checked={(value ?? field.value) === opt.value}
              onChange={() => handleChange(opt.value)}
              onBlur={() => {
                field.onBlur();
                onBlur?.();
              }}
              className="border rounded"
              aria-invalid={!!errorMessage}
            />
            <span>{opt.label}</span>
          </label>
        ))}
        {errorMessage && (
          <p role="alert" className="text-red-600 text-sm">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);
RadioGroup.displayName = 'RadioGroup';
