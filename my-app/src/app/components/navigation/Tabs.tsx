import React from 'react';
import { motion } from 'framer-motion';

export interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Tabs component */
export const Tabs: React.FC<TabsProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
