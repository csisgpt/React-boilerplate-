import React from 'react';

interface NavItem {
  label: string;
  href?: string;
}

export interface NavbarProps {
  items: NavItem[];
  className?: string;
}

/** Top navigation bar */
export const Navbar: React.FC<NavbarProps> = ({ items, className = '' }) => {
  return (
    <nav role="navigation" className={`bg-white shadow ${className}`}> 
      <div className="container mx-auto px-4 flex items-center h-12">
        <ul className="flex gap-4">
          {items.map((item, idx) => (
            <li key={idx}>
              <a href={item.href} className="hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
