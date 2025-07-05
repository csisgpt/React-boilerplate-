import React from 'react';
import { motion } from 'framer-motion';

export interface PopoverProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Popover component */
export const Popover: React.FC<PopoverProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
