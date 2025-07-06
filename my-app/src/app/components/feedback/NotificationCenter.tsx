import React from 'react';
import { AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useToastStore } from './useToast';
import { Toast } from './Toast';

export interface NotificationCenterProps {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  position = 'top-right',
}) => {
  const toasts = useToastStore((s) => s.toasts);
  const remove = useToastStore((s) => s.remove);

  const posClasses: Record<string, string> = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  return (
    <div className={clsx('fixed z-50', posClasses[position])} aria-live="polite">
      <AnimatePresence initial={false}>
        {toasts.map((t) => (
          <Toast
            key={t.id}
            type={t.type}
            message={t.message}
            duration={t.duration}
            onClose={() => {
              t.onClose?.();
              remove(t.id);
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
