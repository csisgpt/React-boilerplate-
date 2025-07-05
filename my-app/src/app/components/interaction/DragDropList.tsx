import React from 'react';
import { motion } from 'framer-motion';

export interface DragDropListProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** DragDropList component */
export const DragDropList: React.FC<DragDropListProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
