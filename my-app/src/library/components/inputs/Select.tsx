import React from 'react';
import { Controller, Control, FieldValues, FieldPath, RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface Option {
  value: string | number;
  label: string;
}

export interface SelectProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  options: Option[];
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
  sm: 'p-1 text-sm',
  md: 'p-2',
  lg: 'p-3 text-lg',
};

const variantClasses: Record<string, string> = {
  outline: 'ring-1 ring-gray-300 focus:ring-blue-500',
  filled: 'bg-gray-100 ring-1 ring-gray-300 focus:ring-blue-500',
};

function SelectElement(
  {
    label,
    options,
    value,
    defaultValue,
    onChange,
    multiple,
    className,
    variant = 'outline',
    size = 'md',
    inputRef,
  }: Omit<SelectProps, 'name' | 'rules' | 'control'> & { inputRef?: React.Ref<HTMLSelectElement> },
) {
  return (
    <label className="block">
      {label && <span className="mb-1 block">{label}</span>}
      <select
        ref={inputRef}
        value={value}
        defaultValue={defaultValue}
        onChange={e => {
          const val = multiple
            ? Array.from(e.target.selectedOptions).map(o => o.value)
            : e.target.value;
          onChange?.(val);
        }}
        multiple={multiple}
        className={clsx('rounded outline-none', variantClasses[variant], sizeClasses[size], className)}
      >
        {options.map(opt => (
          <motion.option key={opt.value} value={opt.value} whileHover={{ scale: 1.05 }}>
            {opt.label}
          </motion.option>
        ))}
      </select>
    </label>
  );
}

export const Select = React.forwardRef(function Select<T extends FieldValues>(
  {
    control,
    name,
    rules,
    value,
    defaultValue,
    onChange,
    ...rest
  }: SelectProps<T>,
  ref: React.Ref<HTMLSelectElement>,
) {
  if (control) {
    return (
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue as any}
        render={({ field, fieldState }) => (
          <SelectElement
            {...rest}
            value={field.value}
            onChange={val => {
              field.onChange(val);
              onChange?.(val);
            }}
            inputRef={el => {
              field.ref(el);
              if (typeof ref === 'function') ref(el);
              else if (ref) (ref as any).current = el;
            }}
            multiple={rest.multiple}
            className={clsx(rest.className, fieldState.invalid && 'ring-red-500')}
          />
        )}
      />
    );
  }

  return (
    <SelectElement
      {...rest}
      value={value}
      defaultValue={defaultValue}
      onChange={val => {
        onChange?.(val);
      }}
      inputRef={ref}
    />
  );
}) as <T extends FieldValues>(p: SelectProps<T> & { ref?: React.Ref<HTMLSelectElement> }) => JSX.Element;

