import React from 'react';
import { motion } from 'framer-motion';

export interface StepperProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Stepper component */
export const Stepper: React.FC<StepperProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
