import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface ListProps<T = any> extends React.HTMLAttributes<HTMLUListElement> {
  data: T[];
  renderItem?: (item: T, index: number) => React.ReactNode;
  onItemClick?: (item: T) => void;
  sortable?: boolean;
  filterable?: boolean;
  className?: string;
}

/**
 * Generic list component with optional sorting and filtering.
 */
export function List<T>({
  data,
  renderItem,
  onItemClick,
  sortable = false,
  filterable = false,
  className = '',
  ...rest
}: ListProps<T>) {
  const [filter, setFilter] = useState('');
  const [ascending, setAscending] = useState(true);

  const items = useMemo(() => {
    let result = data;
    if (filterable && filter) {
      const q = filter.toLowerCase();
      result = result.filter((i) =>
        Object.values(i as any).some((v) => String(v).toLowerCase().includes(q)),
      );
    }
    if (sortable) {
      result = [...result].sort((a, b) => {
        if (a > b) return ascending ? 1 : -1;
        if (a < b) return ascending ? -1 : 1;
        return 0;
      });
    }
    return result;
  }, [data, filter, filterable, sortable, ascending]);

  return (
    <div className={className} {...rest}>
      {filterable && (
        <input
          className="mb-2 px-2 py-1 border rounded w-full dark:bg-gray-800"
          placeholder="Filter..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      )}
      {sortable && (
        <button
          className="mb-2 text-sm text-blue-600"
          onClick={() => setAscending((a) => !a)}
        >
          Sort {ascending ? '▲' : '▼'}
        </button>
      )}
      <ul role="list" className="space-y-2">
        <AnimatePresence initial={false}>
          {items.map((item, idx) => (
            <motion.li
              layout
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              key={idx}
              onClick={() => onItemClick?.(item)}
              className="p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
            >
              {renderItem ? renderItem(item, idx) : (item as any).toString()}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

List.displayName = 'List';
