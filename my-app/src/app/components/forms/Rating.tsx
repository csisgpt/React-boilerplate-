import React from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface RatingProps {
  name: string;
  label?: string;
  max?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (val: number) => void;
  onBlur?: () => void;
  errorMessage?: string;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
}

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      name,
      label,
      max = 5,
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

    const current = value ?? field.value ?? 0;

    const handleRate = (v: number) => {
      field.onChange(v);
      onChange?.(v);
    };

    return (
      <div ref={ref} className={clsx('space-y-1', className)} {...rest}>
        {label && <p className="text-sm font-medium">{label}</p>}
        <div className="flex space-x-1">
          {Array.from({ length: max }).map((_, idx) => {
            const ratingVal = idx + 1;
            return (
              <motion.button
                key={ratingVal}
                type="button"
                onClick={() => handleRate(ratingVal)}
                onBlur={() => {
                  field.onBlur();
                  onBlur?.();
                }}
                className={clsx(
                  'w-6 h-6 text-yellow-500',
                  ratingVal <= current ? 'opacity-100' : 'opacity-20',
                )}
                aria-label={`${ratingVal} star`}
              >
                ★
              </motion.button>
            );
          })}
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
Rating.displayName = 'Rating';
