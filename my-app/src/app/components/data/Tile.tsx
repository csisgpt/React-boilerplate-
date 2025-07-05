import React from 'react';
import { motion } from 'framer-motion';

export interface TileProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Tile component */
export const Tile: React.FC<TileProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
