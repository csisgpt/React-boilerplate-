import React from 'react';
import { motion } from 'framer-motion';

export interface VirtualListProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** VirtualList component */
export const VirtualList: React.FC<VirtualListProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
