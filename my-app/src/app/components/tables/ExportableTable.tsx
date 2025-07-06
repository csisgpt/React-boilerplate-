import React from 'react';
import { Column, TableProps } from './types';
import Papa from 'papaparse';

export interface ExportableTableProps extends TableProps {
  fileName?: string;
}

export const ExportableTable: React.FC<ExportableTableProps> = ({
  columns,
  data,
  fileName = 'table.csv',
}) => {
  const exportCsv = () => {
    const csv = Papa.unparse(data);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-2">
      <button className="px-2 py-1 border rounded" onClick={exportCsv}>
        Export CSV
      </button>
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
                <td key={c.key} role="gridcell" className="px-4 py-2 whitespace-nowrap">
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

ExportableTable.displayName = 'ExportableTable';
