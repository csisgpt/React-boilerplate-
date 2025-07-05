import React from 'react';
import { motion } from 'framer-motion';

export interface PasswordInputProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** PasswordInput component */
export const PasswordInput: React.FC<PasswordInputProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
