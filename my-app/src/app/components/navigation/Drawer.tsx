import React from 'react';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

/**
 * Sliding drawer panel.
 */
export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  position = 'left',
  className = '',
  children,
}) => {
  return (
    <div
      className={`${open ? 'block' : 'hidden'} fixed inset-0 z-40`}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`absolute top-0 ${position === 'left' ? 'left-0' : 'right-0'} h-full w-64 bg-white shadow-xl ${className}`}
      >
        {children}
      </div>
    </div>
  );
};
