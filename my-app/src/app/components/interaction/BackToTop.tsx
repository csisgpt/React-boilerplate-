import React from 'react';
import { motion } from 'framer-motion';

export interface BackToTopProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** BackToTop component */
export const BackToTop: React.FC<BackToTopProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
