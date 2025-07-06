import React, { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (val: number) => void;
  readOnly?: boolean;
  size?: number;
  className?: string;
}

const Star = ({ filled, size }: { filled: boolean; size: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={filled ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export const Rating = React.forwardRef<HTMLDivElement, RatingProps>(
  function Rating(
    {
      max = 5,
      value,
      defaultValue = 0,
      onChange,
      readOnly = false,
      size = 24,
      className,
      ...rest
    },
    ref,
  ) {
    const isControlled = value !== undefined;
    const [internal, setInternal] = useState(defaultValue);
    const [hover, setHover] = useState(0);

    const rating = isControlled ? value! : internal;

    const handleSelect = (i: number) => {
      if (readOnly) return;
      if (!isControlled) setInternal(i);
      onChange?.(i);
    };

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={clsx('inline-flex', className)}
        {...rest}
      >
        {Array.from({ length: max }).map((_, idx) => {
          const index = idx + 1;
          const filled = hover ? index <= hover : index <= rating;
          return (
            <motion.button
              type="button"
              key={index}
              role="radio"
              aria-checked={index === rating}
              className="p-1"
              onMouseEnter={() => !readOnly && setHover(index)}
              onMouseLeave={() => !readOnly && setHover(0)}
              onClick={() => handleSelect(index)}
              whileHover={!readOnly ? { scale: 1.2 } : undefined}
              whileTap={!readOnly ? { scale: 0.9 } : undefined}
            >
              <Star filled={filled} size={size} />
            </motion.button>
          );
        })}
      </div>
    );
  },
);
