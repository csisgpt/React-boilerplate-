import React, { useState, UIEvent } from 'react';
import { motion } from 'framer-motion';

export interface VirtualListProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  /** Items to render */
  data: T[];
  /** Render a single row */
  renderItem: (item: T, index: number) => React.ReactNode;
  /** Height of each row in pixels */
  itemHeight: number;
  /** Container height */
  height: number;
  /** Number of extra rows to render above/below viewport */
  overscan?: number;
  /** Row click handler */
  onItemClick?: (item: T) => void;
  className?: string;
}

/**
 * Virtualized list component without external dependencies.
 * Renders only visible rows for performance.
 */
export function VirtualList<T>({
  data,
  renderItem,
  itemHeight,
  height,
  overscan = 5,
  onItemClick,
  className = '',
  ...rest
}: VirtualListProps<T>) {
  const [scrollTop, setScrollTop] = useState(0);
  const totalHeight = data.length * itemHeight;

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
  const endIndex = Math.min(
    data.length,
    Math.ceil((scrollTop + height) / itemHeight) + overscan,
  );

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  return (
    <div
      className={`relative overflow-auto ${className}`}
      style={{ height }}
      onScroll={handleScroll}
      {...rest}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        {data.slice(startIndex, endIndex).map((item, i) => {
          const index = startIndex + i;
          return (
            <motion.div
              key={index}
              style={{
                position: 'absolute',
                top: index * itemHeight,
                height: itemHeight,
                left: 0,
                right: 0,
              }}
              onClick={() => onItemClick?.(item)}
            >
              {renderItem(item, index)}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

VirtualList.displayName = 'VirtualList';
