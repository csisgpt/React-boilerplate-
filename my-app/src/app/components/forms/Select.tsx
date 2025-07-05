import React from 'react';
import { motion } from 'framer-motion';

export interface SelectProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Select component */
export const Select: React.FC<SelectProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
