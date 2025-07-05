import React from 'react';
import { motion } from 'framer-motion';

export interface PermissionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** PermissionWrapper component */
export const PermissionWrapper: React.FC<PermissionWrapperProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
