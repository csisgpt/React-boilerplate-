import React from 'react';
import { motion } from 'framer-motion';

export interface DrawerProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Drawer component */
export const Drawer: React.FC<DrawerProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
