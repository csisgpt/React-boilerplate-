import React, { useState, UIEvent } from 'react';
import { TableProps } from './types';

export interface VirtualizedTableProps extends TableProps {
  rowHeight?: number;
  height?: number;
}

export const VirtualizedTable: React.FC<VirtualizedTableProps> = ({
  columns,
  data,
  rowHeight = 40,
  height = 300,
  onRowClick,
}) => {
  const [scrollTop, setScrollTop] = useState(0);
  const overscan = 5;

  const handleScroll = (e: UIEvent<HTMLTableSectionElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const start = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan);
  const end = Math.min(data.length, Math.ceil((scrollTop + height) / rowHeight) + overscan);
  const totalHeight = data.length * rowHeight;

  return (
    <div className="overflow-auto" style={{ maxHeight: height + 50 }}>
      <table className="min-w-full text-left" role="table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="px-4 py-2">
                {c.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody
          onScroll={handleScroll}
          style={{ display: 'block', height, overflowY: 'auto', position: 'relative' }}
        >
          <tr style={{ height: totalHeight }} aria-hidden />
          {data.slice(start, end).map((row, idx) => (
            <tr
              key={start + idx}
              onClick={() => onRowClick?.(row)}
              style={{
                position: 'absolute',
                top: (start + idx) * rowHeight,
                display: 'table',
                width: '100%',
              }}
              className="odd:bg-gray-50 dark:odd:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
              role="row"
            >
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-2 whitespace-nowrap" role="gridcell">
                  {row[c.key] as React.ReactNode}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

VirtualizedTable.displayName = 'VirtualizedTable';
