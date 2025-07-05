import React from 'react';
import { motion } from 'framer-motion';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Header component */
export const Header: React.FC<HeaderProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
