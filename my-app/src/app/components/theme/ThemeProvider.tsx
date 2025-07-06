import React, { createContext, useContext, useEffect, useState } from 'react';
import clsx from 'clsx';
import { colors, spacing, radii, shadows, fontSizes } from './theme';

interface ThemeContextValue {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export interface ThemeProviderProps {
  children: React.ReactNode;
  className?: string;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, className }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([k, v]) => root.style.setProperty(`--color-${k}`, v));
    Object.entries(spacing).forEach(([k, v]) => root.style.setProperty(`--spacing-${k}`, v));
    Object.entries(radii).forEach(([k, v]) => root.style.setProperty(`--radius-${k}`, v));
    Object.entries(shadows).forEach(([k, v]) => root.style.setProperty(`--shadow-${k}`, v));
    Object.entries(fontSizes).forEach(([k, v]) => root.style.setProperty(`--font-size-${k}`, v));
  }, []);

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={clsx(className, theme)}>{children}</div>
    </ThemeContext.Provider>
  );
};
