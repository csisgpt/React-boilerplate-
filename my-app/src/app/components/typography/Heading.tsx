import React from 'react';
import { motion } from 'framer-motion';

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Heading component */
export const Heading: React.FC<HeadingProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
