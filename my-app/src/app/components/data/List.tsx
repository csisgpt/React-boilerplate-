import React from 'react';
import { motion } from 'framer-motion';

export interface ListProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** List component */
export const List: React.FC<ListProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
