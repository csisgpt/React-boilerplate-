import React from 'react';
import { motion } from 'framer-motion';

export interface ColorSwatchProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ColorSwatch component */
export const ColorSwatch: React.FC<ColorSwatchProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
