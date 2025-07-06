import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Column } from './Table';

export interface ExpandableTableProps {
  columns: Column[];
  data: any[];
  renderExpanded: (row: any) => React.ReactNode;
}

/**
 * Table with expandable rows for extra details.
 */
export const ExpandableTable: React.FC<ExpandableTableProps> = ({ columns, data, renderExpanded }) => {
  const [open, setOpen] = useState<Set<number>>(new Set());

  const toggle = (idx: number) => {
    setOpen(p => {
      const set = new Set(p);
      set.has(idx) ? set.delete(idx) : set.add(idx);
      return set;
    });
  };

  return (
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
          <React.Fragment key={idx}>
            <tr onClick={() => toggle(idx)} className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              {columns.map(col => (
                <td key={col.key} className="px-4 py-2 whitespace-nowrap">
                  {row[col.key]}
                </td>
              ))}
            </tr>
            <AnimatePresence>
              {open.has(idx) && (
                <motion.tr initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <td colSpan={columns.length} className="px-4 py-2 bg-gray-50 dark:bg-gray-800">
                    {renderExpanded(row)}
                  </td>
                </motion.tr>
              )}
            </AnimatePresence>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};
