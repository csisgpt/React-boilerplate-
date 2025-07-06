import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Column } from './Table';

export interface DataGridProps {
  columns: Column[];
  data: any[];
  pageSize?: number;
}

/**
 * Advanced table with filtering, sorting and pagination.
 */
export const DataGrid: React.FC<DataGridProps> = ({ columns, data, pageSize = 10 }) => {
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [page, setPage] = useState(0);

  const filtered = React.useMemo(() => {
    return data.filter(row =>
      Object.values(row).some(val => String(val).toLowerCase().includes(filter.toLowerCase()))
    );
  }, [data, filter]);

  const sorted = React.useMemo(() => {
    if (!sortKey) return filtered;
    return [...filtered].sort((a, b) => {
      if (a[sortKey!] < b[sortKey!]) return sortAsc ? -1 : 1;
      if (a[sortKey!] > b[sortKey!]) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [filtered, sortKey, sortAsc]);

  const pages = Math.ceil(sorted.length / pageSize);
  const paged = sorted.slice(page * pageSize, (page + 1) * pageSize);

  const onSort = (key: string) => {
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  return (
    <div className="space-y-2">
      <input
        aria-label="Filter rows"
        value={filter}
        onChange={e => setFilter(e.target.value)}
        className="border px-2 py-1 rounded w-full dark:bg-gray-800 dark:text-gray-100"
        placeholder="Filter..."
      />
      <table className="min-w-full divide-y divide-gray-200" role="table">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map(col => (
              <th
                key={col.key}
                onClick={() => col.sortable && onSort(col.key)}
                aria-sort={sortKey === col.key ? (sortAsc ? 'ascending' : 'descending') : 'none'}
                className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 cursor-pointer select-none"
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200">
          <AnimatePresence>
            {paged.map((row, idx) => (
              <motion.tr key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {columns.map(col => (
                  <td key={col.key} className="px-4 py-2 whitespace-nowrap">
                    {row[col.key]}
                  </td>
                ))}
              </motion.tr>
            ))}
          </AnimatePresence>
        </tbody>
      </table>
      <div className="flex justify-between items-center">
        <button disabled={page === 0} onClick={() => setPage(p => Math.max(p - 1, 0))} className="px-2 py-1 border rounded disabled:opacity-50">
          Prev
        </button>
        <span>
          Page {page + 1} of {pages}
        </span>
        <button disabled={page + 1 >= pages} onClick={() => setPage(p => Math.min(p + 1, pages - 1))} className="px-2 py-1 border rounded disabled:opacity-50">
          Next
        </button>
      </div>
    </div>
  );
};
