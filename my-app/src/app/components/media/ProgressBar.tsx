import React from 'react';
import { motion } from 'framer-motion';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number; // 0-100
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, className = '', ...rest }) => (
  <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded ${className}`} {...rest}>
    <motion.div
      className="bg-blue-500 h-2 rounded"
      initial={{ width: 0 }}
      animate={{ width: `${value}%` }}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  </div>
);
