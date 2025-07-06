import React, { useState } from 'react';
import { TableProps } from './types';

export interface EditableTableProps extends TableProps {}

export const EditableTable: React.FC<EditableTableProps> = ({
  columns,
  data,
  onEditSave,
}) => {
  const [rows, setRows] = useState(() => data);
  const [editing, setEditing] = useState<{ row: number; key: string }>();
  const [value, setValue] = useState('');

  const startEdit = (row: number, key: string, current: any) => {
    setEditing({ row, key });
    setValue(String(current ?? ''));
  };

  const save = () => {
    if (!editing) return;
    const updated = rows.map((r, i) =>
      i === editing.row ? { ...r, [editing.key]: value } : r,
    );
    setRows(updated);
    onEditSave?.(updated);
    setEditing(undefined);
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
          <tr key={idx} role="row" className="odd:bg-gray-50 dark:odd:bg-gray-800">
            {columns.map((c) => (
              <td key={c.key} role="gridcell" className="px-4 py-2" onDoubleClick={() => startEdit(idx, c.key, row[c.key])}>
                {editing && editing.row === idx && editing.key === c.key ? (
                  <input
                    autoFocus
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onBlur={save}
                    onKeyDown={(e) => e.key === 'Enter' && save()}
                    className="px-1 py-0.5 border rounded w-full dark:bg-gray-800"
                  />
                ) : (
                  row[c.key] as React.ReactNode
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

EditableTable.displayName = 'EditableTable';
