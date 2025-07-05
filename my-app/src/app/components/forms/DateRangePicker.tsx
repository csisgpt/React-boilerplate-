import React from 'react';
import { motion } from 'framer-motion';

export interface DateRangePickerProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** DateRangePicker component */
export const DateRangePicker: React.FC<DateRangePickerProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
