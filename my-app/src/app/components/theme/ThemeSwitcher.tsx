import React from 'react';
import { motion } from 'framer-motion';

export interface ThemeSwitcherProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ThemeSwitcher component */
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
