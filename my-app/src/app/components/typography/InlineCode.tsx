import React from 'react';
import { motion } from 'framer-motion';

export interface InlineCodeProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** InlineCode component */
export const InlineCode: React.FC<InlineCodeProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
