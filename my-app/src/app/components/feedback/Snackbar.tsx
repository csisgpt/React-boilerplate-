import React from 'react';
import { motion } from 'framer-motion';

export interface SnackbarProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Snackbar component */
export const Snackbar: React.FC<SnackbarProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
