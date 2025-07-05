import React from 'react';
import { motion } from 'framer-motion';

export interface DatePickerProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** DatePicker component */
export const DatePicker: React.FC<DatePickerProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
