import React from 'react';
import { motion } from 'framer-motion';

export interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: 'primary' | 'secondary' | 'success' | 'danger';
  onRemove?: () => void;
  className?: string;
  children: React.ReactNode;
}

const colors = {
  primary: 'bg-blue-100 text-blue-800',
  secondary: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  danger: 'bg-red-100 text-red-800',
};

export const Chip: React.FC<ChipProps> = ({
  color = 'primary',
  onRemove,
  className = '',
  children,
  ...rest
}) => (
  <motion.div
    className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${colors[color]} ${className}`}
    {...rest}
  >
    <span className="mr-1">{children}</span>
    {onRemove && (
      <button
        type="button"
        aria-label="remove"
        onClick={onRemove}
        className="ml-1 text-current hover:text-opacity-70"
      >
        ×
      </button>
    )}
  </motion.div>
);
