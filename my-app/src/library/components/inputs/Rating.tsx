import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  value?: number;
  defaultValue?: number;
  onChange: (val: number) => void;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap: Record<NonNullable<Props['size']>, number> = {
  sm: 16,
  md: 24,
  lg: 32,
};

const Star = ({ filled, size }: { filled: boolean; size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const Rating = React.forwardRef<HTMLDivElement, Props>(function Rating(
  {
    max = 5,
    value,
    defaultValue = 0,
    onChange,
    readOnly = false,
    size = 'md',
    className,
    ...rest
  },
  ref,
) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue);
  const [hover, setHover] = useState(0);

  const rating = isControlled ? value! : internal;
  const starSize = sizeMap[size];

  const select = (val: number) => {
    if (readOnly) return;
    if (!isControlled) setInternal(val);
    onChange(val);
  };

  return (
    <div ref={ref} role="radiogroup" className={clsx('inline-flex', className)} {...rest}>
      {Array.from({ length: max }).map((_, idx) => {
        const index = idx + 1;
        const filled = hover ? index <= hover : index <= rating;
        return (
          <motion.button
            key={index}
            type="button"
            role="radio"
            aria-checked={index === rating}
            className="p-1"
            onMouseEnter={() => !readOnly && setHover(index)}
            onMouseLeave={() => !readOnly && setHover(0)}
            onClick={() => select(index)}
            whileHover={!readOnly ? { scale: 1.2 } : undefined}
            whileTap={!readOnly ? { scale: 0.9 } : undefined}
          >
            <Star filled={filled} size={starSize} />
          </motion.button>
        );
      })}
    </div>
  );
});

export default Rating;
