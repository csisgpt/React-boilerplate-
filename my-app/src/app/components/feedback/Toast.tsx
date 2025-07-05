import React from 'react';
import { motion } from 'framer-motion';

export interface ToastProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Toast component */
export const Toast: React.FC<ToastProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
