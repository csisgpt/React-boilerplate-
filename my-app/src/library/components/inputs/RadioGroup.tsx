import React from 'react';
import { Controller, Control, FieldValues, FieldPath, RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface Option {
  value: string | number;
  label: string;
}

export interface RadioGroupProps<T extends FieldValues = FieldValues> {
  name: FieldPath<T>;
  label?: string;
  options: Option[];
  value?: any;
  defaultValue?: any;
  onChange?: (value: any) => void;
  rules?: RegisterOptions;
  control?: Control<T>;
  className?: string;
  variant?: 'outline' | 'filled';
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses: Record<string, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};

export const RadioGroup = React.forwardRef(function RadioGroup<T extends FieldValues>(
  {
    control,
    name,
    rules,
    value,
    defaultValue,
    onChange,
    options,
    className,
    size = 'md',
  }: RadioGroupProps<T>,
  ref: React.Ref<HTMLInputElement>,
) {
  const renderGroup = (
    selected: any,
    handleChange: (val: any) => void,
    fieldRef?: (el: HTMLInputElement | null) => void,
    invalid?: boolean,
  ) => (
    <div role="radiogroup" className={clsx('space-y-2', className)}>
      {options.map(opt => (
        <motion.label
          key={opt.value}
          whileHover={{ scale: 1.02 }}
          className="flex items-center space-x-2"
        >
          <input
            ref={fieldRef}
            type="radio"
            value={opt.value}
            checked={selected === opt.value}
            onChange={() => handleChange(opt.value)}
            role="radio"
            aria-checked={selected === opt.value}
            aria-invalid={invalid}
            className={clsx('text-blue-600', sizeClasses[size])}
          />
          <span>{opt.label}</span>
        </motion.label>
      ))}
    </div>
  );

  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue as any}
        render={({ field, fieldState }) =>
          renderGroup(
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

  const [internal, setInternal] = React.useState(defaultValue);
  return renderGroup(
    value !== undefined ? value : internal,
    val => {
      if (value === undefined) setInternal(val);
      onChange?.(val);
    },
    ref as any,
    false,
  );
}) as <T extends FieldValues>(p: RadioGroupProps<T> & { ref?: React.Ref<HTMLInputElement> }) => JSX.Element;

