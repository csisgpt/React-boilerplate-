import React from 'react';
import { motion } from 'framer-motion';

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Footer component */
export const Footer: React.FC<FooterProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
