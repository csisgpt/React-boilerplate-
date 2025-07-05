import React from 'react';
import { motion } from 'framer-motion';

export interface ContextMenuProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ContextMenu component */
export const ContextMenu: React.FC<ContextMenuProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
