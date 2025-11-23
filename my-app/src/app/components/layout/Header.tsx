import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function Header({ children, className = '' }: HeaderProps) {
  return (
    <header role="banner" className={`fixed top-0 left-0 right-0 z-50 border-b border-neutral-border/60 backdrop-blur-lg bg-base-soft/80 ${className}`}> 
      <div className="container max-w-7xl mx-auto px-4 py-4 flex justify-between gap-4">{children}</div>
    </header>
  );
}
