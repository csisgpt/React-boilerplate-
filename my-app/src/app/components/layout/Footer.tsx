import React from 'react';

export interface FooterProps {
  children: React.ReactNode;
  className?: string;
}

export function Footer({ children, className = '' }: FooterProps) {
  return (
    <footer role="contentinfo" className={`bg-base-soft border-t border-b-neutral ${className}`}> 
      <div className="container max-w-7xl mx-auto px-4 py-4 text-center text-sm text-text-muted">{children}</div>
    </footer>
  );
}
