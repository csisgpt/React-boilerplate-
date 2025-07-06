import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

export interface ColorSwatchProps {
  colors: Record<string, string>;
  onSelect?: (color: string) => void;
  className?: string;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ colors, onSelect, className }) => {
  return (
    <div role="list" className={clsx('grid grid-cols-6 gap-2', className)}>
      {Object.entries(colors).map(([name, value]) => (
        <motion.button
          key={name}
          role="listitem"
          aria-label={name}
          style={{ backgroundColor: value }}
          className="h-8 w-8 rounded focus:outline-none focus:ring-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onSelect?.(value)}
        />
      ))}
    </div>
  );
};
