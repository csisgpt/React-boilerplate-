import React from 'react';
import { motion } from 'framer-motion';

export interface DropdownProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Dropdown component */
export const Dropdown: React.FC<DropdownProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
