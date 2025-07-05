import React from 'react';
import { motion } from 'framer-motion';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Box component */
export const Box: React.FC<BoxProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
