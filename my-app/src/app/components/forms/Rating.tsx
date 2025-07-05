import React from 'react';
import { motion } from 'framer-motion';

export interface RatingProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Rating component */
export const Rating: React.FC<RatingProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
