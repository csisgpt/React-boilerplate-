import React from 'react';
import { motion } from 'framer-motion';

export interface StatsCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** StatsCard component */
export const StatsCard: React.FC<StatsCardProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
