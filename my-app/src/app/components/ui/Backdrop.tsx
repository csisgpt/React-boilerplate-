import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

export interface BackdropProps {
  onClick?: () => void;
  color?: string;
  opacity?: number;
  className?: string;
}

export const Backdrop: React.FC<BackdropProps> = ({
  onClick,
  color = '#000',
  opacity = 0.5,
  className,
}) => (
  <AnimatePresence>
    <motion.div
      key="backdrop"
      role="presentation"
      aria-hidden="true"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={clsx('fixed inset-0', className)}
      style={{ backgroundColor: color }}
    />
  </AnimatePresence>
);
