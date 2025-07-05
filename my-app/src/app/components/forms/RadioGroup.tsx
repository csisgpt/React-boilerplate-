import React from 'react';
import { motion } from 'framer-motion';

export interface RadioGroupProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** RadioGroup component */
export const RadioGroup: React.FC<RadioGroupProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
