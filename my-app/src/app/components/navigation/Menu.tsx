import React from 'react';

interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface MenuProps {
  items: MenuItem[];
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

/** Simple navigation menu */
export const Menu: React.FC<MenuProps> = ({ items, orientation = 'vertical', className = '' }) => {
  return (
    <nav role="navigation" className={className}>
      <ul className={`flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row space-x-4'}`}> 
        {items.map((item, idx) => (
          <li key={idx}>
            {item.href ? (
              <a href={item.href} className="px-2 py-1 hover:underline inline-flex items-center gap-1">
                {item.icon}
                {item.label}
              </a>
            ) : (
              <span className="px-2 py-1 inline-flex items-center gap-1">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
