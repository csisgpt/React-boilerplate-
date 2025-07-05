import React from 'react';
import { motion } from 'framer-motion';

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Container component */
export const Container: React.FC<ContainerProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
