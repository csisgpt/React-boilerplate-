import React, { useState, KeyboardEvent } from 'react';

interface AccordionItem {
  key: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  activeKey?: string;
  onChange?: (key: string) => void;
  collapsible?: boolean;
  className?: string;
}

/**
 * Accessible accordion component.
 */
export const Accordion: React.FC<AccordionProps> = ({
  items,
  activeKey,
  onChange,
  collapsible = true,
  className = '',
}) => {
  const [open, setOpen] = useState<string | undefined>(activeKey ?? items[0]?.key);

  const toggle = (key: string) => {
    const newKey = collapsible && open === key ? undefined : key;
    setOpen(newKey);
    onChange?.(newKey ?? key);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, key: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(key);
    }
  };

  return (
    <div className={className} role="presentation">
      {items.map((item) => (
        <div key={item.key} className="border-b last:border-none">
          <button
            className="w-full flex items-center justify-between px-4 py-2 text-left focus:outline-none focus:ring"
            aria-expanded={open === item.key}
            onClick={() => toggle(item.key)}
            onKeyDown={(e) => handleKeyDown(e, item.key)}
          >
            <span className="flex items-center gap-2">
              {item.icon}
              {item.label}
            </span>
          </button>
          <div
            role="region"
            hidden={open !== item.key}
            className="px-4 py-2"
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};
