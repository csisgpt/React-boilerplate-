import React from 'react';
import { motion } from 'framer-motion';

export interface LazyImageProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** LazyImage component */
export const LazyImage: React.FC<LazyImageProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
