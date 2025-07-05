import React from 'react';
import { motion } from 'framer-motion';

export interface CopyToClipboardProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** CopyToClipboard component */
export const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
