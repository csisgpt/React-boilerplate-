import React from 'react';
import { motion } from 'framer-motion';

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Grid component */
export const Grid: React.FC<GridProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
