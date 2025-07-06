import React, { useState } from 'react';
import { Controller, Control, RegisterOptions } from 'react-hook-form';
import clsx from 'clsx';
import { DatePicker, Props as DatePickerProps } from './DatePicker';

export interface Props {
  name: string;
  label?: string;
  value?: { start: Date | string | null; end: Date | string | null };
  defaultValue?: { start: Date | string | null; end: Date | string | null };
  onChange: (range: { start: Date | string | null; end: Date | string | null }) => void;
  calendar?: 'gregorian' | 'jalali';
  locale?: string;
  format?: string;
  placeholder?: string;
  clearable?: boolean;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
}

export const DateRangePicker = React.forwardRef<HTMLDivElement, Props>(function DateRangePicker(
  {
    name,
    label,
    value,
    defaultValue,
    onChange,
    calendar = 'gregorian',
    locale = 'en-US',
    control,
    rules,
    className,
  },
  ref,
) {
  const [internal, setInternal] = useState(
    value ?? defaultValue ?? { start: null, end: null },
  );

  const handleStart = (date: Date | string) => {
    const range = { ...internal, start: date };
    setInternal(range);
    onChange(range);
  };
  const handleEnd = (date: Date | string) => {
    const range = { ...internal, end: date };
    setInternal(range);
    onChange(range);
  };

  const content = (
    <div className={clsx('flex gap-2', className)} ref={ref}>
      <DatePicker
        name={`${name}-start`}
        label={label ? `${label} - start` : undefined}
        value={internal.start ?? undefined}
        onChange={handleStart}
        calendar={calendar}
        locale={locale}
      />
      <DatePicker
        name={`${name}-end`}
        label={label ? `${label} - end` : undefined}
        value={internal.end ?? undefined}
        onChange={handleEnd}
        calendar={calendar}
        locale={locale}
      />
    </div>
  );

  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={internal as any}
        render={() => content}
      />
    );
  }

  return content;
});
