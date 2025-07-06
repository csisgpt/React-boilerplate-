import React from 'react';
import { Column } from './Table';

export interface ResponsiveTableProps {
  columns: (Column & { hidden?: boolean; hiddenSm?: boolean })[];
  data: any[];
}

/**
 * Table with responsive columns.
 */
export const ResponsiveTable: React.FC<ResponsiveTableProps> = ({ columns, data }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200" role="table">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          {columns.map(col => (
            <th
              key={col.key}
              className={`${col.hidden ? 'hidden' : ''} ${col.hiddenSm ? 'sm:hidden' : ''} px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300`}
            >
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200">
        {data.map((row, idx) => (
          <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700">
            {columns.map(col => (
              <td key={col.key} className={`${col.hidden ? 'hidden' : ''} ${col.hiddenSm ? 'sm:hidden' : ''} px-4 py-2`}>
                {row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
