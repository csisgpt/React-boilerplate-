import React, { useState, useMemo, UIEvent } from 'react';
import { motion } from 'framer-motion';

export interface Column {
  key: string;
  title: string;
  sortable?: boolean;
}

export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  data?: any[];
  columns?: Column[];
  sortable?: boolean;
  filterable?: boolean;
  virtualized?: boolean;
  rowHeight?: number;
  height?: number;
  onRowClick?: (rowData: any) => void;
  responsive?: boolean;
  title?: string;
  description?: string;
  className?: string;
}

/**
 * Responsive data table with optional sorting, filtering and virtualization.
 */
export const Table: React.FC<TableProps> = ({
  data = [],
  columns = [],
  sortable = false,
  filterable = false,
  virtualized = false,
  rowHeight = 40,
  height = 300,
  onRowClick,
  title,
  description,
  className = '',
  ...rest
}) => {
  const [sortKey, setSortKey] = useState<string>();
  const [sortAsc, setSortAsc] = useState(true);
  const [filter, setFilter] = useState('');
  const [scrollTop, setScrollTop] = useState(0);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const filtered = useMemo(() => {
    let rows = data;
    if (filterable && filter) {
      const q = filter.toLowerCase();
      rows = rows.filter((row) =>
        Object.values(row).some((v) => String(v).toLowerCase().includes(q)),
      );
    }
    if (sortable && sortKey) {
      rows = [...rows].sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        if (av > bv) return sortAsc ? 1 : -1;
        if (av < bv) return sortAsc ? -1 : 1;
        return 0;
      });
    }
    return rows;
  }, [data, filter, filterable, sortKey, sortAsc, sortable]);

  const overscan = 5;
  const handleScroll = (e: UIEvent<HTMLTableSectionElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };
  const start = virtualized ? Math.max(0, Math.floor(scrollTop / rowHeight) - overscan) : 0;
  const end = virtualized
    ? Math.min(filtered.length, Math.ceil((scrollTop + height) / rowHeight) + overscan)
    : filtered.length;

  const totalHeight = filtered.length * rowHeight;

  return (
    <div className={className} {...rest}>
      {title && <h3 className="font-semibold mb-2">{title}</h3>}
      {description && <p className="text-sm text-gray-500 mb-2">{description}</p>}
      {filterable && (
        <input
          className="mb-2 px-2 py-1 border rounded w-full dark:bg-gray-800"
          placeholder="Filter..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      )}
      <div className="overflow-auto" style={{ maxHeight: virtualized ? height + 50 : undefined }}>
        <table className="min-w-full text-left" role="table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  role="columnheader"
                  scope="col"
                  onClick={() => sortable && col.sortable && handleSort(col.key)}
                  className={
                    col.sortable && sortable
                      ? 'px-4 py-2 cursor-pointer select-none'
                      : 'px-4 py-2'
                  }
                  aria-sort={
                    sortKey === col.key ? (sortAsc ? 'ascending' : 'descending') : 'none'
                  }
                >
                  <span className="flex items-center">
                    {col.title}
                    {sortable && col.sortable && sortKey === col.key && (
                      <motion.span className="ml-1" animate={{ rotate: sortAsc ? 0 : 180 }}>
                        ▲
                      </motion.span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody
            onScroll={virtualized ? handleScroll : undefined}
            style={virtualized ? { display: 'block', height, overflowY: 'auto', position: 'relative' } : undefined}
          >
            {virtualized && (
              <tr style={{ height: totalHeight }} aria-hidden />
            )}
            {filtered.slice(start, end).map((row, rowIndex) => (
              <tr
                key={start + rowIndex}
                role="row"
                onClick={() => onRowClick?.(row)}
                className="odd:bg-gray-50 dark:odd:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                style={
                  virtualized
                    ? {
                        position: 'absolute',
                        top: (start + rowIndex) * rowHeight,
                        display: 'table',
                        width: '100%',
                      }
                    : undefined
                }
              >
                {columns.map((col) => (
                  <td key={col.key} role="gridcell" className="px-4 py-2 whitespace-nowrap">
                    {row[col.key] as React.ReactNode}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

Table.displayName = 'Table';
