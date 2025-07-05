import React from 'react';
import { motion } from 'framer-motion';

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** AvatarGroup component */
export const AvatarGroup: React.FC<AvatarGroupProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
