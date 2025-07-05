import React from 'react';
import { motion } from 'framer-motion';

export interface TreeViewProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** TreeView component */
export const TreeView: React.FC<TreeViewProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
