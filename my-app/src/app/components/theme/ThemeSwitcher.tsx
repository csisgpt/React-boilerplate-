import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { useTheme } from './ThemeProvider';

export interface ThemeSwitcherProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Sun = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 4.636" />
  </svg>
);

const Moon = () => (
  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

export const ThemeSwitcher = React.forwardRef<HTMLButtonElement, ThemeSwitcherProps>(
  function ThemeSwitcher({ className, ...rest }, ref) {
    const { theme, toggleTheme } = useTheme();
    return (
      <motion.button
        ref={ref}
        aria-label="Toggle theme"
        whileTap={{ scale: 0.9 }}
        className={clsx(
          'p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2',
          className
        )}
        onClick={toggleTheme}
        {...rest}
      >
        {theme === 'light' ? <Sun /> : <Moon />}
      </motion.button>
    );
  }
);
