import React from 'react';
import { motion } from 'framer-motion';

export interface ToggleSwitchProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ToggleSwitch component */
export const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
