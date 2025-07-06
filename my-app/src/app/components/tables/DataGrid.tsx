import React, { useState } from 'react';
import { TableProps } from './types';

export interface DataGridProps extends TableProps {
  pageSize?: number;
}

export const DataGrid: React.FC<DataGridProps> = ({
  columns,
  data,
  sortable = false,
  filterable = false,
  pageSize = 10,
}) => {
  const [sortKey, setSortKey] = useState<string>();
  const [asc, setAsc] = useState(true);
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(1);

  const filtered = React.useMemo(() => {
    let rows = data;
    if (filterable && filter) {
      const q = filter.toLowerCase();
      rows = rows.filter((r) =>
        Object.values(r).some((v) => String(v).toLowerCase().includes(q)),
      );
    }
    if (sortable && sortKey) {
      rows = [...rows].sort((a, b) => {
        const av = a[sortKey];
        const bv = b[sortKey];
        if (av > bv) return asc ? 1 : -1;
        if (av < bv) return asc ? -1 : 1;
        return 0;
      });
    }
    return rows;
  }, [data, filter, filterable, sortKey, asc, sortable]);

  const pages = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const handleHeader = (key: string, isSortable?: boolean) => {
    if (!sortable || !isSortable) return;
    if (sortKey === key) setAsc(!asc);
    else {
      setSortKey(key);
      setAsc(true);
    }
  };

  return (
    <div className="space-y-2">
      {filterable && (
        <input
          className="px-2 py-1 border rounded w-full dark:bg-gray-800"
          placeholder="Filter..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      )}
      <table className="min-w-full text-left" role="table">
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
          {paged.map((row, idx) => (
            <tr key={idx} role="row" className="odd:bg-gray-50 dark:odd:bg-gray-800">
              {columns.map((c) => (
                <td key={c.key} role="gridcell" className="px-4 py-2 whitespace-nowrap">
                  {row[c.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center gap-2 justify-end">
        <button
          className="px-2 py-1 border rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>
          {page} / {pages}
        </span>
        <button
          className="px-2 py-1 border rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.min(pages, p + 1))}
          disabled={page === pages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

DataGrid.displayName = 'DataGrid';
