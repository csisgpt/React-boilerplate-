import React from 'react';
import { motion } from 'framer-motion';

export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Link component */
export const Link: React.FC<LinkProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
