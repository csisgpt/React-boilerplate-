import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Controller, Control, FieldValues, RegisterOptions } from 'react-hook-form';

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  rules?: RegisterOptions;
  control?: Control<FieldValues>;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  min?: number;
  max?: number;
  step?: number;
}

const sizeTrack: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};
const sizeThumb: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'w-3 h-3',
  md: 'w-4 h-4',
  lg: 'w-6 h-6',
};
const colorFill: Record<'primary' | 'secondary', string> = {
  primary: 'bg-blue-600',
  secondary: 'bg-green-600',
};

interface BaseProps extends SliderProps { }

const BaseSlider = React.forwardRef<HTMLDivElement, BaseProps>(function BaseSlider(
  {
    name,
    value,
    defaultValue,
    onChange,
    className,
    size = 'md',
    color = 'primary',
    min = 0,
    max = 100,
    step = 1,
    ...rest
  },
  ref,
) {
  const [internal, setInternal] = useState(defaultValue ?? min);
  const isControlled = typeof value === 'number';
  const val = isControlled ? value : internal;
  const trackRef = useRef<HTMLDivElement>(null);
  const percent = ((val - min) / (max - min)) * 100;
  const handleValue = (v: number) => {
    let next = Math.min(Math.max(v, min), max);
    next = Math.round(next / step) * step;
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };
  const handleKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') handleValue(val + step);
    if (e.key === 'ArrowLeft') handleValue(val - step);
  };
  return (
    <div
      ref={ref}
      role="slider"
      tabIndex={0}
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={val}
      onKeyDown={handleKey}
      className={clsx('relative w-full select-none', className)}
      {...rest}
    >
      <div ref={trackRef} className={clsx('relative rounded-full bg-gray-300', sizeTrack[size])}>
        <div
          className={clsx('absolute left-0 top-0 rounded-full', colorFill[color], sizeTrack[size])}
          style={{ width: `${percent}%` }}
        />
        <motion.div
          className={clsx('absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow cursor-pointer', sizeThumb[size])}
          drag="x"
          dragConstraints={trackRef}
          dragElastic={0}
          animate={{ left: `${percent}%` }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          onDrag={(_, info) => {
            if (!trackRef.current) return;
            const rect = trackRef.current.getBoundingClientRect();
            const pos = info.point.x - rect.left;
            const perc = Math.min(Math.max(pos / rect.width, 0), 1);
            handleValue(min + perc * (max - min));
          }}
        />
      </div>
      <input type="hidden" name={name} value={val} />
    </div>
  );
});

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(function Slider(props, ref) {
  const { control, rules, name, ...rest } = props;
  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <BaseSlider
            {...rest}
            {...field}
            value={field.value}
            onChange={field.onChange}
            ref={ref}
            name={name}
          />
        )}
      />
    );
  }
  return <BaseSlider ref={ref} name={name} {...rest} />;
});

export default Slider;
