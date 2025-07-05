import React from 'react';
import { motion } from 'framer-motion';

export interface ParagraphProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Paragraph component */
export const Paragraph: React.FC<ParagraphProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
