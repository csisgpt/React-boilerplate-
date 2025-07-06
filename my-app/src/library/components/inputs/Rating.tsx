import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const sizes: Record<'sm' | 'md' | 'lg', string> = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
};

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  max?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Rating = React.forwardRef<HTMLDivElement, Props>(function Rating(
  {
    max = 5,
    value: valueProp,
    defaultValue = 0,
    onChange,
    readOnly,
    size = 'md',
    className,
    ...rest
  },
  ref,
) {
  const [internal, setInternal] = React.useState(defaultValue);
  const [hover, setHover] = React.useState(0);
  const value = valueProp !== undefined ? valueProp : internal;

  const handleSelect = (v: number) => {
    if (readOnly) return;
    onChange?.(v);
    if (valueProp === undefined) setInternal(v);
  };

  const handleHover = (v: number) => {
    if (readOnly) return;
    setHover(v);
  };

  const display = hover || value;

  return (
    <div ref={ref} role="radiogroup" className={clsx('inline-flex', className)} {...rest}>
      {Array.from({ length: max }).map((_, i) => {
        const starVal = i + 1;
        return (
          <motion.span
            key={starVal}
            role="radio"
            aria-checked={value >= starVal}
            className="cursor-pointer"
            whileHover={!readOnly ? { scale: 1.2 } : undefined}
            onMouseEnter={() => handleHover(starVal)}
            onMouseLeave={() => handleHover(0)}
            onClick={() => handleSelect(starVal)}
          >
            <svg
              className={clsx(sizes[size], display >= starVal ? 'text-yellow-400' : 'text-gray-300')}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.384 2.46a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.384-2.46a1 1 0 00-1.175 0l-3.384 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.049 9.401c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          </motion.span>
        );
      })}
    </div>
  );
});
