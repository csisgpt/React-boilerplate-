import React from 'react';

export interface SidebarProps {
  open: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

/** Collapsible sidebar */
export const Sidebar: React.FC<SidebarProps> = ({ open, onClose, className = '', children }) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-30 transform ${open ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 bg-white shadow ${className}`}
      role="complementary">
      <button className="absolute top-2 right-2" onClick={onClose} aria-label="Close sidebar">×</button>
      <div className="p-4 h-full overflow-y-auto">{children}</div>
    </div>
  );
};
