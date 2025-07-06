import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  className?: string;
}

const sizes: Record<NonNullable<LoaderProps['size']>, string> = {
  sm: 'h-4 w-4',
  md: 'h-8 w-8',
  lg: 'h-12 w-12',
};

export const Loader: React.FC<LoaderProps> = ({ size = 'md', label, className }) => (
  <div className={clsx('flex flex-col items-center justify-center', className)}>
    <motion.div
      className={clsx('rounded-full border-4 border-current border-t-transparent', sizes[size])}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
    />
    {label && <span className="mt-2 text-sm">{label}</span>}
  </div>
);
