import React from 'react';
import { motion } from 'framer-motion';

export interface ProgressBarProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ProgressBar component */
export const ProgressBar: React.FC<ProgressBarProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
