import React from 'react';
import { motion } from 'framer-motion';

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Breadcrumb component */
export const Breadcrumb: React.FC<BreadcrumbProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
