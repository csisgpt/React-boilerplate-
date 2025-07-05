import React from 'react';
import { motion } from 'framer-motion';

export interface FlexProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Flex component */
export const Flex: React.FC<FlexProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
