import React from 'react';
import { motion } from 'framer-motion';

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Stack component */
export const Stack: React.FC<StackProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
