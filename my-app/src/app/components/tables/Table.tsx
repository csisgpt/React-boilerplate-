import React, { useState } from 'react';

export interface Column {
  key: string;
  title: string;
  sortable?: boolean;
}

export interface TableProps {
  columns: Column[];
  data: any[];
  sortable?: boolean;
  onRowClick?: (row: any) => void;
}

/**
 * Basic table with sortable columns and selectable rows.
 */
export const Table: React.FC<TableProps> = ({ columns, data, sortable = true, onRowClick }) => {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortAsc, setSortAsc] = useState(true);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const sortedData = React.useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      if (a[sortKey!] < b[sortKey!]) return sortAsc ? -1 : 1;
      if (a[sortKey!] > b[sortKey!]) return sortAsc ? 1 : -1;
      return 0;
    });
  }, [data, sortKey, sortAsc]);

  const onSort = (key: string) => {
    if (!sortable) return;
    if (sortKey === key) {
      setSortAsc(!sortAsc);
    } else {
      setSortKey(key);
      setSortAsc(true);
    }
  };

  const toggleRow = (idx: number, row: any) => {
    setSelected(prev => {
      const set = new Set(prev);
      set.has(idx) ? set.delete(idx) : set.add(idx);
      return set;
    });
    onRowClick?.(row);
  };

  return (
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
        {sortedData.map((row, idx) => (
          <tr
            key={idx}
            onClick={() => toggleRow(idx, row)}
            className={`cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 ${selected.has(idx) ? 'bg-blue-100 dark:bg-blue-900' : ''}`}
          >
            {columns.map(col => (
              <td key={col.key} className="px-4 py-2 whitespace-nowrap">
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
