import React from 'react';
import { TableProps } from './types';

export interface ResponsiveTableProps extends TableProps {}

export const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-auto">
      <table className="min-w-full text-left" role="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th
                key={c.key}
                className={`px-4 py-2 ${i > 1 ? 'hidden md:table-cell' : ''}`}
              >
                {c.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} role="row" className="odd:bg-gray-50 dark:odd:bg-gray-800">
              {columns.map((c, i) => (
                <td
                  key={c.key}
                  role="gridcell"
                  className={`px-4 py-2 whitespace-nowrap ${i > 1 ? 'hidden md:table-cell' : ''}`}
                >
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

ResponsiveTable.displayName = 'ResponsiveTable';
