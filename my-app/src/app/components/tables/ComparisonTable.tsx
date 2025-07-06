import React from 'react';
import { TableProps } from './types';

export interface ComparisonTableProps extends TableProps {}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({ columns, data }) => {
  if (!data.length) return null;
  const baseline = data[0];
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
        {data.map((row, idx) => (
          <tr key={idx} role="row" className="odd:bg-gray-50 dark:odd:bg-gray-800">
            {columns.map((c) => (
              <td
                key={c.key}
                role="gridcell"
                className={`px-4 py-2 whitespace-nowrap ${row[c.key] !== baseline[c.key] ? 'bg-yellow-100 dark:bg-yellow-900' : ''}`}
              >
                {row[c.key] as React.ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

ComparisonTable.displayName = 'ComparisonTable';
