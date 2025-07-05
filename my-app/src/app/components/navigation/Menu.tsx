import React from 'react';
import { motion } from 'framer-motion';

export interface MenuProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Menu component */
export const Menu: React.FC<MenuProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
