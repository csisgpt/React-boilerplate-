import React, { useState } from 'react';
import { Controller, Control, FieldValues, FieldPath, RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface Option {
  value: string | number;
  label: string;
}

export interface CheckboxProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  options?: Option[];
  value?: any;
  defaultValue?: any;
  onChange?: (value: any) => void;
  rules?: RegisterOptions;
  control?: Control<T>;
  multiple?: boolean;
  className?: string;
  variant?: 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<string, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

export const Checkbox = React.forwardRef(function Checkbox<T extends FieldValues>(
  {
    control,
    name,
    rules,
    options,
    value,
    defaultValue,
    onChange,
    multiple = false,
    label,
    className,
    size = 'md',
  }: CheckboxProps<T>,
  ref: React.Ref<HTMLInputElement>,
) {
  const renderInput = (
    checkedValue: any,
    handleChange: (val: any) => void,
    fieldRef?: (el: HTMLInputElement | null) => void,
    invalid?: boolean,
  ) => {
    if (options && multiple) {
      return (
        <div className={clsx('space-y-2', className)} role="group">
          {options.map(opt => (
            <motion.label
              whileHover={{ scale: 1.02 }}
              key={opt.value}
              className="flex items-center space-x-2"
            >
              <input
                ref={fieldRef}
                type="checkbox"
                value={opt.value}
                checked={checkedValue?.includes(opt.value)}
                onChange={e => {
                  const val = e.target.value;
                  let newVal = Array.isArray(checkedValue) ? [...checkedValue] : [];
                  if (e.target.checked) newVal.push(val);
                  else newVal = newVal.filter(v => v !== val);
                  handleChange(newVal);
                }}
                role="checkbox"
                aria-checked={checkedValue?.includes(opt.value)}
                aria-invalid={invalid}
                className={clsx('rounded border-gray-300 text-blue-600', sizeClasses[size])}
              />
              <span>{opt.label}</span>
            </motion.label>
          ))}
        </div>
      );
    }
    return (
      <label className={clsx('inline-flex items-center space-x-2', className)}>
        <input
          ref={fieldRef}
          type="checkbox"
          checked={!!checkedValue}
          onChange={e => handleChange(e.target.checked)}
          role="checkbox"
          aria-checked={!!checkedValue}
          aria-invalid={invalid}
          className={clsx('rounded border-gray-300 text-blue-600', sizeClasses[size])}
        />
        {label && <span>{label}</span>}
      </label>
    );
  };

  if (control) {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue as any}
        render={({ field, fieldState }) =>
          renderInput(
            field.value,
            val => {
              field.onChange(val);
              onChange?.(val);
            },
            el => {
              field.ref(el);
              if (typeof ref === 'function') ref(el);
              else if (ref) (ref as any).current = el;
            },
            fieldState.invalid,
          )
        }
      />
    );
  }

  const [internal, setInternal] = useState(defaultValue ?? (multiple ? [] : false));

  return renderInput(
    value !== undefined ? value : internal,
    val => {
      if (value === undefined) setInternal(val);
      onChange?.(val);
    },
    ref as any,
    false,
  );
}) as <T extends FieldValues>(p: CheckboxProps<T> & { ref?: React.Ref<HTMLInputElement> }) => JSX.Element;

