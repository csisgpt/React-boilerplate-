import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import { AnimatePresence, motion } from 'framer-motion';

export interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  footer?: React.ReactNode;
}

export const Dialog: React.FC<React.PropsWithChildren<DialogProps>> = ({
  isOpen,
  onClose,
  title,
  footer,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const content = (
    <AnimatePresence>
      {isOpen && (
        <FocusTrap focusTrapOptions={{ initialFocus: false }}>
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby={title ? 'dialog-title' : undefined}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-h-[90vh] w-full max-w-lg overflow-auto rounded bg-white p-4 dark:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
              ref={ref}
            >
              {title && (
                <h2 id="dialog-title" className="mb-4 text-lg font-semibold">
                  {title}
                </h2>
              )}
              <div className="mb-4">{children}</div>
              {footer && <div className="mt-4">{footer}</div>}
            </motion.div>
          </motion.div>
        </FocusTrap>
      )}
    </AnimatePresence>
  );
  return createPortal(content, document.body);
};
