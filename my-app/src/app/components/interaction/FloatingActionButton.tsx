import React from 'react';
import { motion } from 'framer-motion';

export interface FloatingActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const FloatingActionButton: React.FC<FloatingActionButtonProps> = ({ className = '', children, ...rest }) => (
  <motion.button
    className={`fixed bottom-4 right-4 p-4 rounded-full bg-blue-600 text-white shadow-lg ${className}`}
    whileHover={{ scale: 1.1 }}
    {...rest}
  >
    {children}
  </motion.button>
);
