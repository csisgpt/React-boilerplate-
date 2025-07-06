import React, { useState } from 'react';
import { TableProps } from './types';

export interface ExpandableTableProps extends TableProps {
  renderExpanded: (row: any) => React.ReactNode;
}

export const ExpandableTable: React.FC<ExpandableTableProps> = ({
  columns,
  data,
  renderExpanded,
}) => {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    const n = new Set(open);
    if (n.has(i)) n.delete(i);
    else n.add(i);
    setOpen(n);
  };

  return (
    <table className="min-w-full text-left" role="table">
      <thead>
        <tr>
          <th />
          {columns.map((c) => (
            <th key={c.key} className="px-4 py-2">
              {c.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => (
          <React.Fragment key={idx}>
            <tr role="row" className="odd:bg-gray-50 dark:odd:bg-gray-800">
              <td className="px-2 py-2">
                <button onClick={() => toggle(idx)} aria-expanded={open.has(idx)}>
                  {open.has(idx) ? '-' : '+'}
                </button>
              </td>
              {columns.map((c) => (
                <td key={c.key} role="gridcell" className="px-4 py-2">
                  {row[c.key] as React.ReactNode}
                </td>
              ))}
            </tr>
            {open.has(idx) && (
              <tr role="row" className="bg-gray-100 dark:bg-gray-700">
                <td colSpan={columns.length + 1} className="px-4 py-2">
                  {renderExpanded(row)}
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

ExpandableTable.displayName = 'ExpandableTable';
