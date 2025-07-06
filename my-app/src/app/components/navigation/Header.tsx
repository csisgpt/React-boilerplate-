import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

/** Page header */
export const Header: React.FC<HeaderProps> = ({ children, className = '' }) => {
  return (
    <header role="banner" className={`bg-white shadow ${className}`}> 
      <div className="container mx-auto px-4 py-4">{children}</div>
    </header>
  );
};
