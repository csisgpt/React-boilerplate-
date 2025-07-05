import React from 'react';
import { motion } from 'framer-motion';

export interface ThemeProviderProps extends React.HTMLAttributes<HTMLElement> {
  /** Additional class names */
  className?: string;
}

/** ThemeProvider component */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ className = '', children, ...rest }) => {
  return (
    <motion.div className={className} {...rest}>{children}</motion.div>
  );
};
