import React from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface SliderProps {
  name: string;
  label?: string;
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (val: number) => void;
  onBlur?: () => void;
  errorMessage?: string;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  (
    {
      name,
      label,
      min = 0,
      max = 100,
      step = 1,
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
      const val = Number(e.target.value);
      field.onChange(val);
      onChange?.(val);
    };

    return (
      <div className={clsx('space-y-1', className)} {...rest}>
        {label && <label htmlFor={name}>{label}</label>}
        <motion.input
          type="range"
          id={name}
          ref={ref}
          min={min}
          max={max}
          step={step}
          {...field}
          value={value ?? field.value}
          onChange={handleChange}
          onBlur={() => {
            field.onBlur();
            onBlur?.();
          }}
          className="w-full"
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
Slider.displayName = 'Slider';
