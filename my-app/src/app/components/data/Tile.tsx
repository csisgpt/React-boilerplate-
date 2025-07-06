import React from 'react';
import { motion } from 'framer-motion';

export interface TileProps extends React.HTMLAttributes<HTMLDivElement> {
  clickable?: boolean;
  className?: string;
}

/**
 * Simple tile component used in grid layouts.
 */
export const Tile = React.forwardRef<HTMLDivElement, TileProps>(function Tile(
  { clickable = false, className = '', children, ...rest },
  ref,
) {
  return (
    <motion.div
      ref={ref}
      whileHover={clickable ? { scale: 1.03 } : undefined}
      className={`bg-white dark:bg-gray-800 rounded p-4 shadow-sm ${
        clickable ? 'cursor-pointer hover:shadow-md' : ''
      } ${className}`}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

Tile.displayName = 'Tile';
