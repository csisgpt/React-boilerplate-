import React from 'react';
import { motion } from 'framer-motion';

export interface ErrorBoundaryWrapperProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ErrorBoundaryWrapper component */
export const ErrorBoundaryWrapper: React.FC<ErrorBoundaryWrapperProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
