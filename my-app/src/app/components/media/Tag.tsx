import React from 'react';
import { motion } from 'framer-motion';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Tag component */
export const Tag: React.FC<TagProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
