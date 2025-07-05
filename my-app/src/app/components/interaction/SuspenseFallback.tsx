import React from 'react';
import { motion } from 'framer-motion';

export interface SuspenseFallbackProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** SuspenseFallback component */
export const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
