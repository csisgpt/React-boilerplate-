import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function Header({ children, className = '' }: HeaderProps) {
  return (
    <header role="banner" className={`bg-white shadow-sm ${className}`}> 
      <div className="container mx-auto px-4 py-4">{children}</div>
    </header>
  );
}
