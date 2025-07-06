import React, { useState } from 'react';
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  name: string;
  label?: string;
  rules?: RegisterOptions;
  control?: Control<FieldValues>;
  className?: string;
  variant?: 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

const sizeClasses: Record<NonNullable<InputProps['size']>, string> = {
  sm: 'text-sm px-2 py-1',
  md: 'text-base px-3 py-2',
  lg: 'text-lg px-4 py-3',
};

const variantClasses: Record<NonNullable<InputProps['variant']>, string> = {
  outline: 'bg-white border border-gray-300',
  filled: 'bg-gray-100 border border-gray-300',
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    name,
    label,
    placeholder,
    rules,
    control,
    className,
    variant = 'outline',
    size = 'md',
    theme = 'light',
    ...rest
  },
  ref,
) {
  const [uncontrolledValue, setValue] = useState(rest.defaultValue || '');
  let methods: ReturnType<typeof useFormContext<FieldValues>> | undefined;
  try {
    methods = useFormContext<FieldValues>();
  } catch {
    // not inside form provider
  }

  const inputClasses = clsx(
    'rounded focus:outline-none focus:ring-2',
    sizeClasses[size],
    variantClasses[variant],
    theme === 'dark'
      ? 'bg-gray-800 text-white border-gray-700 focus:ring-blue-400'
      : 'focus:ring-blue-500',
    className,
  );

  const renderField = (
    field: any,
    fieldState?: { error?: { message?: string } | undefined },
  ) => (
    <div className="mb-4">
      {label && (
        <label htmlFor={name} className="block mb-1">
          {label}
        </label>
      )}
      <motion.input
        id={name}
        placeholder={placeholder}
        whileFocus={{ scale: 1.02 }}
        whileHover={{ scale: 1.01 }}
        aria-invalid={fieldState?.error ? 'true' : 'false'}
        aria-describedby={`${name}-error`}
        className={inputClasses}
        {...field}
        {...rest}
        ref={ref as any}
      />
      {fieldState?.error && (
        <p id={`${name}-error`} role="alert" className="text-red-600 text-sm mt-1">
          {fieldState.error.message}
        </p>
      )}
    </div>
  );

  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) =>
          renderField(field, fieldState)
        }
      />
    );
  }

  if (methods) {
    const { ref: rf, ...reg } = methods.register(name, rules);
    return renderField({ ...reg, ref: (el: HTMLInputElement) => {
      rf(el);
      if (typeof ref === 'function') ref(el);
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = el;
    } });
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    rest.onChange?.(e);
    if (rest.value === undefined) {
      setValue(e.target.value);
    }
  };
  return renderField({
    name,
    onChange: handleChange,
    value: rest.value !== undefined ? rest.value : uncontrolledValue,
    ref,
  });
});

export default Input;
