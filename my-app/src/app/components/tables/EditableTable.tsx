import React, { useState } from 'react';
import { Column } from './Table';

export interface EditableTableProps {
  columns: Column[];
  data: any[];
  onEditSave?: (data: any[]) => void;
}

/**
 * Inline editable data table.
 */
export const EditableTable: React.FC<EditableTableProps> = ({ columns, data, onEditSave }) => {
  const [rows, setRows] = useState(() => data.map(row => ({ ...row })));
  const [editing, setEditing] = useState<{ row: number; key: string } | null>(null);

  const save = () => onEditSave?.(rows);

  const startEdit = (row: number, key: string) => setEditing({ row, key });

  const stopEdit = () => setEditing(null);

  const update = (row: number, key: string, value: string) => {
    setRows(r => r.map((item, idx) => (idx === row ? { ...item, [key]: value } : item)));
  };

  return (
    <div className="space-y-2">
      <table className="min-w-full divide-y divide-gray-200" role="table">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            {columns.map(col => (
              <th key={col.key} className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              {columns.map(col => (
                <td key={col.key} className="px-4 py-2" onDoubleClick={() => startEdit(rowIndex, col.key)}>
                  {editing && editing.row === rowIndex && editing.key === col.key ? (
                    <input
                      autoFocus
                      value={row[col.key]}
                      onChange={e => update(rowIndex, col.key, e.target.value)}
                      onBlur={stopEdit}
                      className="border px-1 rounded w-full dark:bg-gray-800 dark:text-gray-100"
                    />
                  ) : (
                    row[col.key]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={save} className="px-3 py-1 border rounded">Save</button>
    </div>
  );
};
