import React from 'react';
import { motion } from 'framer-motion';

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Pagination component */
export const Pagination: React.FC<PaginationProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
