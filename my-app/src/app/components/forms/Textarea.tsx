import React from 'react';
import { motion } from 'framer-motion';

export interface TextareaProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Textarea component */
export const Textarea: React.FC<TextareaProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
