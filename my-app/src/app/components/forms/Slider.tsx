import React from 'react';
import { motion } from 'framer-motion';

export interface SliderProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** Slider component */
export const Slider: React.FC<SliderProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
