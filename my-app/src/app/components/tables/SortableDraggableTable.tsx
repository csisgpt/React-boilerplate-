import React, { useState } from 'react';
import { TableProps } from './types';

export interface SortableDraggableTableProps extends TableProps {}

export const SortableDraggableTable: React.FC<SortableDraggableTableProps> = ({
  columns,
  data,
  onSortChange,
}) => {
  const [rows, setRows] = useState(() => data);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => () => {
    setDragIndex(index);
  };

  const handleDrop = (index: number) => () => {
    if (dragIndex === null || dragIndex === index) return;
    const newRows = [...rows];
    const [moved] = newRows.splice(dragIndex, 1);
    newRows.splice(index, 0, moved);
    setRows(newRows);
    onSortChange?.(newRows);
    setDragIndex(null);
  };

  return (
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
      <tbody>
        {rows.map((row, idx) => (
          <tr
            key={idx}
            draggable
            onDragStart={handleDragStart(idx)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop(idx)}
            className="odd:bg-gray-50 dark:odd:bg-gray-800"
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

SortableDraggableTable.displayName = 'SortableDraggableTable';
