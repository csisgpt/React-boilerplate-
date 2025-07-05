import React from 'react';
import { motion } from 'framer-motion';

export interface ConfirmationDialogProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ConfirmationDialog component */
export const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
