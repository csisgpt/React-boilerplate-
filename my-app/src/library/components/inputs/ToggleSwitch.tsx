import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Controller, Control, FieldValues, RegisterOptions } from 'react-hook-form';

export interface ToggleSwitchProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  name: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  rules?: RegisterOptions;
  control?: Control<FieldValues>;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
}

const sizeTrack: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'w-8 h-4',
  md: 'w-10 h-6',
  lg: 'w-14 h-8',
};
const sizeThumb: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-6 h-6',
};
const colorTrack: Record<'primary' | 'secondary', string> = {
  primary: 'bg-blue-600',
  secondary: 'bg-green-600',
};

interface BaseProps extends ToggleSwitchProps { }

const BaseToggle = React.forwardRef<HTMLButtonElement, BaseProps>(function BaseToggle(
  {
    name,
    checked,
    defaultChecked,
    onChange,
    className,
    size = 'md',
    color = 'primary',
    ...rest
  },
  ref,
) {
  const [internal, setInternal] = useState(defaultChecked ?? false);
  const isControlled = typeof checked === 'boolean';
  const value = isControlled ? checked : internal;
  const handleChange = (next: boolean) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };
  const handleKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowLeft') {
      handleChange(false);
    } else if (e.key === 'ArrowRight') {
      handleChange(true);
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleChange(!value);
    }
  };
  return (
    <button
      type="button"
      ref={ref}
      role="switch"
      aria-checked={value}
      onClick={() => handleChange(!value)}
      onKeyDown={handleKey}
      className={clsx('relative inline-flex items-center rounded-full transition-colors', sizeTrack[size],
        value ? colorTrack[color] : 'bg-gray-300', className)}
      {...rest}
    >
      <motion.span
        className={clsx('absolute left-0 top-0 flex items-center justify-center rounded-full bg-white shadow', sizeThumb[size])}
        animate={{ x: value ? '100%' : '0%' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        style={{ translateX: value ? '-100%' : '0%' }}
      />
      <input type="checkbox" name={name} checked={value} hidden readOnly />
    </button>
  );
});

export const ToggleSwitch = React.forwardRef<HTMLButtonElement, ToggleSwitchProps>(function ToggleSwitch(
  props,
  ref,
) {
  const { control, rules, name, ...rest } = props;
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <BaseToggle
            {...rest}
            {...field}
            checked={field.value}
            onChange={field.onChange}
            ref={ref}
            name={name}
          />
        )}
      />
    );
  }
  return <BaseToggle ref={ref} name={name} {...rest} />;
});

export default ToggleSwitch;
