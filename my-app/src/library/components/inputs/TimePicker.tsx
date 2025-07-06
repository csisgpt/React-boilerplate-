import React from 'react';
import { Controller, Control, RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';

export interface Props {
  name: string;
  label?: string;
  value?: string;
  defaultValue?: string;
  onChange: (time: string) => void;
  calendar?: 'gregorian' | 'jalali';
  locale?: string;
  format?: string;
  placeholder?: string;
  clearable?: boolean;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
}

export const TimePicker = React.forwardRef<HTMLInputElement, Props>(function TimePicker(
  {
    name,
    label,
    value,
    defaultValue,
    onChange,
    placeholder,
    control,
    rules,
    className,
  },
  ref,
) {
  const renderInput = (props?: any) => (
    <div className={clsx('inline-block', className)}>
      {label && <label className="block mb-1">{label}</label>}
      <input
        type="time"
        name={name}
        ref={ref as any}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="border px-2 py-1 w-full"
        {...props}
      />
    </div>
  );

  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) =>
          renderInput({
            value: field.value,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.value),
          })
        }
      />
    );
  }

  return renderInput();
});
