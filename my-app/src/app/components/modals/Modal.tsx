import React, { useEffect, useRef } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  children?: React.ReactNode;
}

/** Basic accessible modal dialog */
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  footer,
  placement = 'bottom',
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    // focus trap start
    const firstFocusable = ref.current?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const placementClasses: Record<string, string> = {
    bottom: 'items-end',
    top: 'items-start',
    left: 'justify-start',
    right: 'justify-end',
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex ${placementClasses[placement]} justify-center`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      aria-describedby={description ? 'modal-desc' : undefined}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} data-testid="backdrop" />
      <div
        ref={ref}
        tabIndex={-1}
        className="relative bg-white dark:bg-gray-800 rounded shadow-lg max-w-lg w-full p-4 m-4 focus:outline-none"
      >
        {title && (
          <h2 id="modal-title" className="text-lg font-semibold mb-2">
            {title}
          </h2>
        )}
        {description && (
          <p id="modal-desc" className="mb-4 text-sm text-gray-600 dark:text-gray-300">
            {description}
          </p>
        )}
        <div>{children}</div>
        {footer && <div className="mt-4 flex justify-end gap-2">{footer}</div>}
      </div>
    </div>
  );
};
