import React, { useState } from 'react';
import { Column } from './Table';

export interface TreeNode {
  id: string;
  parentId?: string;
  data: any;
}

export interface TreeTableProps {
  columns: Column[];
  data: TreeNode[];
}

/**
 * Nested expandable tree table.
 */
export const TreeTable: React.FC<TreeTableProps> = ({ columns, data }) => {
  const [open, setOpen] = useState<Set<string>>(new Set());

  const children = (parentId?: string) => data.filter(n => n.parentId === parentId);

  const renderRows = (parentId?: string, depth = 0): React.ReactNode => {
    return children(parentId).map(node => (
      <React.Fragment key={node.id}>
        <tr
          onClick={() => setOpen(o => new Set(o.has(node.id) ? [...Array.from(o).filter(i => i !== node.id)] : [...o, node.id]))}
          className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          {columns.map((col, idx) => (
            <td key={col.key} className="px-4 py-2" style={{ paddingLeft: idx === 0 ? depth * 16 + 16 : undefined }}>
              {idx === 0 && children(node.id).length > 0 && (
                <span className="mr-2">{open.has(node.id) ? '-' : '+'}</span>
              )}
              {node.data[col.key]}
            </td>
          ))}
        </tr>
        {open.has(node.id) && renderRows(node.id, depth + 1)}
      </React.Fragment>
    ));
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
      <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200">{renderRows(undefined, 0)}</tbody>
    </table>
  );
};
