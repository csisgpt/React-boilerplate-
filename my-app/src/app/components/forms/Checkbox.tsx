import React from 'react';
import { motion } from 'framer-motion';

export interface CheckboxProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Checkbox component */
export const Checkbox: React.FC<CheckboxProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
