import React, { useState } from 'react';
import { Column, TableProps } from './types';

export interface BasicTableProps extends TableProps {}

export const Table: React.FC<BasicTableProps> = ({
  columns,
  data,
  sortable = false,
  onRowClick,
  className = '',
}) => {
  const [sortKey, setSortKey] = useState<string>();
  const [asc, setAsc] = useState(true);
  const [selected, setSelected] = useState<number | null>(null);

  const sorted = React.useMemo(() => {
    if (!sortable || !sortKey) return data;
    return [...data].sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];
      if (av > bv) return asc ? 1 : -1;
      if (av < bv) return asc ? -1 : 1;
      return 0;
    });
  }, [data, sortKey, asc, sortable]);

  const handleHeader = (key: string, isSortable?: boolean) => {
    if (!sortable || !isSortable) return;
    if (sortKey === key) setAsc(!asc);
    else {
      setSortKey(key);
      setAsc(true);
    }
  };

  const selectRow = (idx: number, row: any) => {
    setSelected(idx);
    onRowClick?.(row);
  };

  return (
    <table className={`min-w-full text-left ${className}`} role="table">
      <thead>
        <tr>
          {columns.map((c) => (
            <th
              key={c.key}
              onClick={() => handleHeader(c.key, c.sortable)}
              className={c.sortable && sortable ? 'cursor-pointer select-none px-4 py-2' : 'px-4 py-2'}
              aria-sort={sortKey === c.key ? (asc ? 'ascending' : 'descending') : 'none'}
            >
              <span className="flex items-center">
                {c.title}
                {sortable && c.sortable && sortKey === c.key && (
                  <span className="ml-1">{asc ? '▲' : '▼'}</span>
                )}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sorted.map((row, idx) => (
          <tr
            key={idx}
            onClick={() => selectRow(idx, row)}
            className={`hover:bg-gray-100 dark:hover:bg-gray-700 ${selected === idx ? 'bg-gray-200 dark:bg-gray-800' : ''}`}
            role="row"
          >
            {columns.map((c) => (
              <td key={c.key} role="gridcell" className="px-4 py-2 whitespace-nowrap">
                {row[c.key] as React.ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

Table.displayName = 'Table';
