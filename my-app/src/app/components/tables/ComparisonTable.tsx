import React from 'react';

export interface ComparisonRow {
  key: string;
  label: string;
  a: any;
  b: any;
}

export interface ComparisonTableProps {
  rows: ComparisonRow[];
}

/**
 * Highlight differences between two sets of values.
 */
export const ComparisonTable: React.FC<ComparisonTableProps> = ({ rows }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200" role="table">
      <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300">Field</th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300">A</th>
          <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300">B</th>
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200">
        {rows.map(r => (
          <tr key={r.key} className="hover:bg-gray-50 dark:hover:bg-gray-700">
            <td className="px-4 py-2 font-medium">{r.label}</td>
            <td className={`px-4 py-2 ${r.a !== r.b ? 'bg-red-50 dark:bg-red-900' : ''}`}>{r.a}</td>
            <td className={`px-4 py-2 ${r.a !== r.b ? 'bg-green-50 dark:bg-green-900' : ''}`}>{r.b}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
