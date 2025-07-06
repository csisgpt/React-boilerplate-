import React from 'react';
import { motion } from 'framer-motion';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className = '', ...rest }) => (
  <motion.div
    className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded ${className}`}
    {...rest}
  />
);
