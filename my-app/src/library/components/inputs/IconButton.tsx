import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useTheme } from '../../hooks/useTheme';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  analyticsKey?: string;
}

const variantClasses: Record<NonNullable<Props['variant']>, string> = {
  primary:
    'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600',
  secondary:
    'bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600',
  ghost:
    'bg-transparent text-blue-600 hover:bg-blue-50 disabled:text-blue-300 dark:text-blue-400 dark:hover:bg-gray-700',
};

const sizeClasses: Record<NonNullable<Props['size']>, string> = {
  sm: 'p-1 text-sm',
  md: 'p-2',
  lg: 'p-3 text-lg',
};

export const IconButton = React.forwardRef<HTMLButtonElement, Props>(function IconButton(
  {
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    className,
    analyticsKey,
    disabled,
    children,
    onClick,
    ...rest
  },
  ref,
) {
  useTheme();
  const classes = clsx(
    'inline-flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2',
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isLoading || disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const MotionButton = motion.button;

  return (
    <MotionButton
      ref={ref}
      type="button"
      className={classes}
      data-analytics={analyticsKey}
      aria-busy={isLoading}
      aria-disabled={isLoading || disabled}
      disabled={isLoading || disabled}
      whileTap={{ scale: 0.97 }}
      onClick={handleClick}
      {...rest}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-4 w-4 text-current"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      ) : (
        <>{leftIcon || children || rightIcon}</>
      )}
    </MotionButton>
  );
});
