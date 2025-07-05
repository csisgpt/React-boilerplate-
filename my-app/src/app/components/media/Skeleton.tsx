import React from 'react';
import { motion } from 'framer-motion';

export interface SkeletonProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Skeleton component */
export const Skeleton: React.FC<SkeletonProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
