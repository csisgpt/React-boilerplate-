import React from 'react';
import { motion } from 'framer-motion';

export interface BannerProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Banner component */
export const Banner: React.FC<BannerProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
