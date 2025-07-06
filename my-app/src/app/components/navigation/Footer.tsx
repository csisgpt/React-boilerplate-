import React from 'react';

export interface FooterProps {
  children: React.ReactNode;
  className?: string;
}

/** Global footer */
export const Footer: React.FC<FooterProps> = ({ children, className = '' }) => {
  return (
    <footer role="contentinfo" className={`bg-gray-100 py-4 ${className}`}> 
      <div className="container mx-auto px-4 text-center text-sm text-gray-600">{children}</div>
    </footer>
  );
};
