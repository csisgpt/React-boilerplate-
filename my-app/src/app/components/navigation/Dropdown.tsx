import React, { useState, useRef, useEffect } from 'react';

interface DropdownItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface DropdownProps {
  label: string;
  items: DropdownItem[];
  className?: string;
}

/**
 * Basic dropdown component with keyboard support.
 */
export const Dropdown: React.FC<DropdownProps> = ({ label, items, className = '' }) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  const toggle = () => setOpen((o) => !o);

  return (
    <div className={`relative inline-block ${className}`}>
      <button
        ref={buttonRef}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={toggle}
        className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
      >
        {label}
      </button>
      {open && (
        <ul
          role="menu"
          className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-md z-10"
        >
          {items.map((item, idx) => (
            <li key={idx} role="menuitem" className="px-4 py-2 hover:bg-gray-100">
              {item.href ? <a href={item.href}>{item.label}</a> : item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
