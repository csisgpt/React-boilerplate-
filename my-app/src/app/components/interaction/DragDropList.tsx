import React, { useState } from 'react';

export interface DragDropListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  onChange?: (items: T[]) => void;
  className?: string;
}

export function DragDropList<T>({ items: initial, renderItem, onChange, className = '' }: DragDropListProps<T>) {
  const [items, setItems] = useState(initial);

  const handleDragStart = (index: number) => (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', String(index));
  };

  const handleDrop = (index: number) => (e: React.DragEvent) => {
    const from = Number(e.dataTransfer.getData('text/plain'));
    if (from === index) return;
    const newItems = [...items];
    const [moved] = newItems.splice(from, 1);
    newItems.splice(index, 0, moved);
    setItems(newItems);
    onChange?.(newItems);
    e.preventDefault();
  };

  const allowDrop = (e: React.DragEvent) => e.preventDefault();

  return (
    <ul className={className}>
      {items.map((item, idx) => (
        <li
          key={idx}
          draggable
          onDragStart={handleDragStart(idx)}
          onDragOver={allowDrop}
          onDrop={handleDrop(idx)}
          className="cursor-move select-none"
        >
          {renderItem(item, idx)}
        </li>
      ))}
    </ul>
  );
}
