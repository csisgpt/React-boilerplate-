import React from 'react';
import { motion } from 'framer-motion';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Text component */
export const Text: React.FC<TextProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
