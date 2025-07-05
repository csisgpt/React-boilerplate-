import React from 'react';
import { motion } from 'framer-motion';

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Divider component */
export const Divider: React.FC<DividerProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
