import React from 'react';
import { motion } from 'framer-motion';

export interface ShareButtonsProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ShareButtons component */
export const ShareButtons: React.FC<ShareButtonsProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
