import React from 'react';
import { motion } from 'framer-motion';

export interface InputProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Input component */
export const Input: React.FC<InputProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
