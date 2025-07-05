import React from 'react';
import { motion } from 'framer-motion';

export interface CodeBlockProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** CodeBlock component */
export const CodeBlock: React.FC<CodeBlockProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
