import React from 'react';
import { motion } from 'framer-motion';

export interface FormDialogProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** FormDialog component */
export const FormDialog: React.FC<FormDialogProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
