import React from 'react';
import Papa from 'papaparse';
import { Column } from './Table';

export interface ExportableTableProps {
  columns: Column[];
  data: any[];
}

/**
 * Table with CSV export capability.
 */
export const ExportableTable: React.FC<ExportableTableProps> = ({ columns, data }) => {
  const exportCsv = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-2">
      <button onClick={exportCsv} className="px-3 py-1 border rounded">Export CSV</button>
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
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              {columns.map(col => (
                <td key={col.key} className="px-4 py-2 whitespace-nowrap">
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
