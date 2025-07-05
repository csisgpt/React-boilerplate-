import React from 'react';
import { motion } from 'framer-motion';

export interface CircularProgressProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** CircularProgress component */
export const CircularProgress: React.FC<CircularProgressProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
