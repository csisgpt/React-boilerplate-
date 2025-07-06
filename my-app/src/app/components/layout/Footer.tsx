import React from 'react';

export interface FooterProps {
  children: React.ReactNode;
  className?: string;
}

export function Footer({ children, className = '' }: FooterProps) {
  return (
    <footer role="contentinfo" className={`bg-white border-t ${className}`}> 
      <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">{children}</div>
    </footer>
  );
}
