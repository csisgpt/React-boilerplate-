import React from 'react';
import { motion } from 'framer-motion';

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Navbar component */
export const Navbar: React.FC<NavbarProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
