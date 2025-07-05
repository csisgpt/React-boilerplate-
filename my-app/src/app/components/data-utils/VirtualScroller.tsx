import React from 'react';
import { motion } from 'framer-motion';

export interface VirtualScrollerProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** VirtualScroller component */
export const VirtualScroller: React.FC<VirtualScrollerProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
