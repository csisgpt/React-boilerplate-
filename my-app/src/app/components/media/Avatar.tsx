import React from 'react';
import { motion } from 'framer-motion';

export interface AvatarProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Avatar component */
export const Avatar: React.FC<AvatarProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
