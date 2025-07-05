import React from 'react';
import { motion } from 'framer-motion';

export interface MemberCardProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** MemberCard component */
export const MemberCard: React.FC<MemberCardProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
