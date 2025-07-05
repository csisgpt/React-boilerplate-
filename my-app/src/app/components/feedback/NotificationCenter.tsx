import React from 'react';
import { motion } from 'framer-motion';

export interface NotificationCenterProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** NotificationCenter component */
export const NotificationCenter: React.FC<NotificationCenterProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
