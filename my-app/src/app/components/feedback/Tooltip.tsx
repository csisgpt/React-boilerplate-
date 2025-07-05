import React from 'react';
import { motion } from 'framer-motion';

export interface TooltipProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Tooltip component */
export const Tooltip: React.FC<TooltipProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
