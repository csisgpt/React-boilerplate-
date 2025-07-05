import React from 'react';
import { motion } from 'framer-motion';

export interface ChartWrapperProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ChartWrapper component */
export const ChartWrapper: React.FC<ChartWrapperProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
