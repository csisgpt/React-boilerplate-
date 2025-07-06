import React, { useState, useRef, useEffect } from 'react';

interface MenuItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface ContextMenuProps {
  items: MenuItem[];
  className?: string;
}

/**
 * Context menu triggered by right click.
 */
export const ContextMenu: React.FC<ContextMenuProps> = ({ items, className = '' }) => {
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const close = () => setPosition(null);
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  const onContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onContextMenu={onContextMenu} className={className} role="presentation">
      {position && (
        <ul
          ref={menuRef}
          className="absolute z-50 bg-white border rounded shadow-md py-1 text-sm"
          style={{ top: position.y, left: position.x }}
        >
          {items.map((item, idx) => (
            <li key={idx} className="px-4 py-1 hover:bg-gray-100">
              {item.href ? <a href={item.href}>{item.label}</a> : item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
