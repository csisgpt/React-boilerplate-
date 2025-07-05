import React from 'react';
import { motion } from 'framer-motion';

export interface TableProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Table component */
export const Table: React.FC<TableProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
