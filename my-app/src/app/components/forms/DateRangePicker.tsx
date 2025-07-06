import React from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface DateRangePickerProps {
  name: string;
  label?: string;
  startPlaceholder?: string;
  endPlaceholder?: string;
  value?: { start: string; end: string };
  defaultValue?: { start: string; end: string };
  onChange?: (val: { start: string; end: string }) => void;
  onBlur?: () => void;
  errorMessage?: string;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
}

export const DateRangePicker = React.forwardRef<HTMLDivElement, DateRangePickerProps>(
  (
    {
      name,
      label,
      startPlaceholder,
      endPlaceholder,
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

    const val = value ?? field.value ?? { start: '', end: '' };

    const handleChange = (key: 'start' | 'end', v: string) => {
      const newVal = { ...val, [key]: v };
      field.onChange(newVal);
      onChange?.(newVal);
    };

    return (
      <div ref={ref} className={clsx('space-y-1', className)} {...rest}>
        {label && <p className="text-sm font-medium">{label}</p>}
        <div className="flex space-x-2">
          <motion.input
            type="date"
            value={val.start}
            onChange={(e) => handleChange('start', e.target.value)}
            onBlur={() => {
              field.onBlur();
              onBlur?.();
            }}
            placeholder={startPlaceholder}
            className="w-full border rounded px-3 py-2"
          />
          <motion.input
            type="date"
            value={val.end}
            onChange={(e) => handleChange('end', e.target.value)}
            onBlur={() => {
              field.onBlur();
              onBlur?.();
            }}
            placeholder={endPlaceholder}
            className="w-full border rounded px-3 py-2"
          />
        </div>
        {errorMessage && (
          <p role="alert" className="text-red-600 text-sm">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);
DateRangePicker.displayName = 'DateRangePicker';
