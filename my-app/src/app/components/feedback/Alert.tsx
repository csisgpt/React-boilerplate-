import React from 'react';
import { motion } from 'framer-motion';

export interface AlertProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Alert component */
export const Alert: React.FC<AlertProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
