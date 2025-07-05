import React from 'react';
import { motion } from 'framer-motion';

export interface CenterProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Center component */
export const Center: React.FC<CenterProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
