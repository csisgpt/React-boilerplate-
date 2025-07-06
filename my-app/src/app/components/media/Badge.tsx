import React from 'react';
import { motion } from 'framer-motion';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  className?: string;
  children: React.ReactNode;
}

const colors = {
  primary: 'bg-blue-500 text-white',
  secondary: 'bg-gray-500 text-white',
  success: 'bg-green-500 text-white',
  danger: 'bg-red-500 text-white',
};

export const Badge: React.FC<BadgeProps> = ({
  color = 'primary',
  className = '',
  children,
  ...rest
}) => (
  <motion.span
    className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${colors[color]} ${className}`}
    {...rest}
  >
    {children}
  </motion.span>
);
