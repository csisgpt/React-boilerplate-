import React from 'react';
import { motion } from 'framer-motion';

export interface TimePickerProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** TimePicker component */
export const TimePicker: React.FC<TimePickerProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
