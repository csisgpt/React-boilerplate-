import React from 'react';
import { motion } from 'framer-motion';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: 'primary' | 'secondary';
  className?: string;
  children: React.ReactNode;
}

const colors = {
  primary: 'bg-blue-100 text-blue-800',
  secondary: 'bg-gray-100 text-gray-800',
};

export const Tag: React.FC<TagProps> = ({
  color = 'primary',
  className = '',
  children,
  ...rest
}) => (
  <motion.span
    className={`px-2 py-0.5 rounded text-xs ${colors[color]} ${className}`}
    {...rest}
  >
    {children}
  </motion.span>
);
