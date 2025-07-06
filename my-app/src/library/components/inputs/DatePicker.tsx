import React, { useState, useRef, useEffect } from 'react';
import { Controller, Control, RegisterOptions } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import {
  toJalali,
  toGregorian,
  jMonthLength,
  toFarsiDigits,
} from './jalaliUtils';

export interface Props {
  name: string;
  label?: string;
  value?: Date | string;
  defaultValue?: Date | string;
  onChange: (date: Date | string) => void;
  calendar?: 'gregorian' | 'jalali';
  locale?: string;
  format?: string;
  placeholder?: string;
  clearable?: boolean;
  rules?: RegisterOptions;
  control?: Control<any>;
  className?: string;
}

const weekdayNamesFa = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];
const monthNamesFa = [
  'فروردین',
  'اردیبهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'آبان',
  'آذر',
  'دی',
  'بهمن',
  'اسفند',
];

function formatDate(date: Date, calendar: 'gregorian' | 'jalali', locale: string) {
  if (calendar === 'jalali') {
    const [jy, jm, jd] = toJalali(date);
    const month = monthNamesFa[jm - 1];
    const digits = `${jy}/${jm}/${jd}`;
    return `${toFarsiDigits(digits)} ${month}`;
  }
  return date.toLocaleDateString(locale);
}

function buildCalendar(
  month: number,
  year: number,
  calendar: 'gregorian' | 'jalali',
): { day: number; date: Date }[] {
  const days: { day: number; date: Date }[] = [];
  if (calendar === 'jalali') {
    const length = jMonthLength(year, month);
    for (let d = 1; d <= length; d++) {
      days.push({ day: d, date: toGregorian(year, month, d) });
    }
  } else {
    const length = new Date(year, month, 0).getDate();
    for (let d = 1; d <= length; d++) {
      days.push({ day: d, date: new Date(year, month - 1, d) });
    }
  }
  return days;
}

export const DatePicker = React.forwardRef<HTMLInputElement, Props>(function DatePicker(
  {
    name,
    label,
    value,
    defaultValue,
    onChange,
    calendar = 'gregorian',
    locale = 'en-US',
    placeholder,
    clearable,
    control,
    rules,
    className,
  },
  ref,
) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Date | null>(
    value ? new Date(value) : defaultValue ? new Date(defaultValue) : null,
  );

  const today = new Date();
  const init = selected ?? today;
  const [viewYear, setViewYear] = useState(
    calendar === 'jalali' ? toJalali(init)[0] : init.getFullYear(),
  );
  const [viewMonth, setViewMonth] = useState(
    calendar === 'jalali' ? toJalali(init)[1] : init.getMonth() + 1,
  );

  useEffect(() => {
    if (value) setSelected(new Date(value));
  }, [value]);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const days = buildCalendar(viewMonth, viewYear, calendar);
  const weekdayNames = locale === 'fa-IR' ? weekdayNamesFa : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const handleSelect = (d: Date) => {
    setSelected(d);
    onChange(d);
    setOpen(false);
  };

  const renderInput = (props?: any) => (
    <div className={clsx('relative inline-block', className)} ref={containerRef}>
      {label && <label className="block mb-1">{label}</label>}
      <input
        ref={ref as any}
        name={name}
        placeholder={placeholder}
        value={selected ? formatDate(selected, calendar, locale) : ''}
        readOnly
        onClick={() => setOpen((o) => !o)}
        className="border px-2 py-1 w-full"
        {...props}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute z-10 bg-white dark:bg-gray-800 border mt-1 p-2 rounded shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <button
                type="button"
                onClick={() => {
                  if (calendar === 'jalali') {
                    let y = viewYear;
                    let m = viewMonth - 1;
                    if (m < 1) {
                      m = 12;
                      y -= 1;
                    }
                    setViewYear(y);
                    setViewMonth(m);
                  } else {
                    const date = new Date(viewYear, viewMonth - 2, 1);
                    setViewYear(date.getFullYear());
                    setViewMonth(date.getMonth() + 1);
                  }
                }}
              >
                {'<'}
              </button>
              <span>
                {calendar === 'jalali'
                  ? `${toFarsiDigits(String(viewYear))} ${monthNamesFa[viewMonth - 1]}`
                  : new Date(viewYear, viewMonth - 1).toLocaleDateString(locale, {
                      month: 'long',
                      year: 'numeric',
                    })}
              </span>
              <button
                type="button"
                onClick={() => {
                  if (calendar === 'jalali') {
                    let y = viewYear;
                    let m = viewMonth + 1;
                    if (m > 12) {
                      m = 1;
                      y += 1;
                    }
                    setViewYear(y);
                    setViewMonth(m);
                  } else {
                    const date = new Date(viewYear, viewMonth, 1);
                    setViewYear(date.getFullYear());
                    setViewMonth(date.getMonth() + 1);
                  }
                }}
              >
                {'>'}
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1" role="grid">
              {weekdayNames.map((w) => (
                <div key={w} className="text-xs text-center">
                  {w}
                </div>
              ))}
              {days.map(({ day, date }) => {
                const isSelected =
                  selected && date.toDateString() === selected.toDateString();
                const label = calendar === 'jalali' ? toFarsiDigits(String(day)) : day;
                return (
                  <button
                    key={day}
                    role="gridcell"
                    aria-selected={isSelected}
                    aria-label={label.toString()}
                    className={clsx(
                      'text-center text-sm w-8 h-8 rounded hover:bg-gray-200 focus:bg-gray-200',
                      isSelected && 'bg-blue-500 text-white',
                    )}
                    onClick={() => handleSelect(date)}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={selected as any}
        render={({ field }) =>
          renderInput({
            value: selected ? formatDate(selected, calendar, locale) : '',
            onClick: () => setOpen((o) => !o),
          })
        }
      />
    );
  }
  return renderInput();
});
