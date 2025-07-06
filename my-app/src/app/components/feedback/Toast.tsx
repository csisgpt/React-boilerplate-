import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { ToastItem, ToastType } from './useToast';

export interface ToastProps {
  type?: ToastType;
  message: string;
  duration?: number;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  type = 'info',
  message,
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    if (duration > 0) {
      const t = setTimeout(() => onClose?.(), duration);
      return () => clearTimeout(t);
    }
  }, [duration, onClose]);

  const variants: Record<ToastType, string> = {
    success: 'bg-green-600 text-white',
    info: 'bg-blue-600 text-white',
    warning: 'bg-yellow-600 text-white',
    error: 'bg-red-600 text-white',
  };

  return (
    <motion.div
      role="alert"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={clsx('rounded p-4 shadow-lg', variants[type])}
    >
      {message}
    </motion.div>
  );
};
