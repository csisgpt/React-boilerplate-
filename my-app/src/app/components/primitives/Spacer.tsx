import React from 'react';
import { motion } from 'framer-motion';

export interface SpacerProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Spacer component */
export const Spacer: React.FC<SpacerProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
