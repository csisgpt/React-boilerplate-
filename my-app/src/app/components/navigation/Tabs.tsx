import React, { useState, KeyboardEvent } from 'react';

interface TabItem {
  key: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  activeKey?: string;
  onChange?: (key: string) => void;
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

/** Tabbed content component */
export const Tabs: React.FC<TabsProps> = ({
  items,
  activeKey,
  onChange,
  orientation = 'horizontal',
  className = '',
}) => {
  const [active, setActive] = useState(activeKey ?? items[0]?.key);

  const select = (key: string) => {
    setActive(key);
    onChange?.(key);
  };

  const handleKey = (e: KeyboardEvent<HTMLButtonElement>, idx: number) => {
    let newIdx = idx;
    if (orientation === 'horizontal') {
      if (e.key === 'ArrowRight') newIdx = (idx + 1) % items.length;
      if (e.key === 'ArrowLeft') newIdx = (idx - 1 + items.length) % items.length;
    } else {
      if (e.key === 'ArrowDown') newIdx = (idx + 1) % items.length;
      if (e.key === 'ArrowUp') newIdx = (idx - 1 + items.length) % items.length;
    }
    if (newIdx !== idx) {
      e.preventDefault();
      select(items[newIdx].key);
    }
  };

  return (
    <div className={className}>
      <div role="tablist" aria-orientation={orientation} className={`flex ${orientation === 'vertical' ? 'flex-col' : ''}`}> 
        {items.map((item, idx) => (
          <button
            key={item.key}
            role="tab"
            aria-selected={item.key === active}
            className={`px-4 py-2 focus:outline-none ${item.key === active ? 'border-b-2 border-blue-600' : ''}`}
            onClick={() => select(item.key)}
            onKeyDown={(e) => handleKey(e, idx)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-2">
        {items.find((t) => t.key === active)?.content}
      </div>
    </div>
  );
};
