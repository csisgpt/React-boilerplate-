import React from 'react';
import { motion } from 'framer-motion';

export interface ColorPickerProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ColorPicker component */
export const ColorPicker: React.FC<ColorPickerProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
