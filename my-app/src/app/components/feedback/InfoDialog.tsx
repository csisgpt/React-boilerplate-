import React from 'react';
import { motion } from 'framer-motion';

export interface InfoDialogProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** InfoDialog component */
export const InfoDialog: React.FC<InfoDialogProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
