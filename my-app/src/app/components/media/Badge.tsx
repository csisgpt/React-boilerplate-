import React from 'react';
import { motion } from 'framer-motion';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Badge component */
export const Badge: React.FC<BadgeProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
