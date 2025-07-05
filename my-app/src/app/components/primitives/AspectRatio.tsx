import React from 'react';
import { motion } from 'framer-motion';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** AspectRatio component */
export const AspectRatio: React.FC<AspectRatioProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
