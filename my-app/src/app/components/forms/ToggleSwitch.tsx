import React from 'react';
import { useController, Control, RegisterOptions } from 'react-hook-form';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface ToggleSwitchProps {
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

export const ToggleSwitch = React.forwardRef<HTMLButtonElement, ToggleSwitchProps>(
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

    const toggled = value ?? field.value ?? false;

    const handleToggle = () => {
      field.onChange(!toggled);
      onChange?.(!toggled);
    };

    return (
      <div className={clsx('flex items-center space-x-2', className)} {...rest}>
        <button
          ref={ref}
          type="button"
          aria-pressed={toggled}
          onClick={handleToggle}
          onBlur={() => {
            field.onBlur();
            onBlur?.();
          }}
          className={clsx(
            'relative w-10 h-6 rounded-full transition-colors',
            toggled ? 'bg-blue-500' : 'bg-gray-300',
          )}
        >
          <motion.span
            layout
            className={clsx(
              'absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow',
              toggled && 'translate-x-4',
            )}
          />
        </button>
        {label && <span className="text-sm">{label}</span>}
        {errorMessage && (
          <p role="alert" className="text-red-600 text-sm ml-2">
            {errorMessage}
          </p>
        )}
      </div>
    );
  },
);
ToggleSwitch.displayName = 'ToggleSwitch';
