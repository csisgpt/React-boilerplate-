import React, { useState, UIEvent } from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

export interface VirtualScrollerProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  items: T[];
  itemHeight: number;
  height: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
}

export function VirtualScroller<T>({
  items,
  itemHeight,
  height,
  renderItem,
  className,
  ...rest
}: VirtualScrollerProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);

  const totalHeight = items.length * itemHeight;
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(items.length - 1, Math.floor((scrollTop + height) / itemHeight));
  const visibleItems = items.slice(startIndex, endIndex + 1);
  const offsetY = startIndex * itemHeight;

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <motion.div
      {...rest}
      onScroll={onScroll}
      style={{ height, overflowY: 'auto' }}
      className={clsx('relative', className)}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: `translateY(${offsetY}px)` }}>
          {visibleItems.map((item, idx) => (
            <div key={startIndex + idx} style={{ height: itemHeight }}>
              {renderItem(item, startIndex + idx)}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
