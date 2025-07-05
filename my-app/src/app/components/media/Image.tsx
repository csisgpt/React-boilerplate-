import React from 'react';
import { motion } from 'framer-motion';

export interface ImageProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Image component */
export const Image: React.FC<ImageProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
