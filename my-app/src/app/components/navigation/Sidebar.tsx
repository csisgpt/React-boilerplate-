import React from 'react';
import { motion } from 'framer-motion';

export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Sidebar component */
export const Sidebar: React.FC<SidebarProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
