import React from 'react';
import { motion } from 'framer-motion';

export interface FloatingActionButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** FloatingActionButton component */
export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
