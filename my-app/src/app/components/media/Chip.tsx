import React from 'react';
import { motion } from 'framer-motion';

export interface ChipProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Chip component */
export const Chip: React.FC<ChipProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
