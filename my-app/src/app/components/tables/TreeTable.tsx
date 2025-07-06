import React, { useState } from 'react';
import { TableProps } from './types';

export interface TreeNode {
  id: string;
  [key: string]: any;
  children?: TreeNode[];
}

export interface TreeTableProps extends TableProps {
  data: TreeNode[];
}

export const TreeTable: React.FC<TreeTableProps> = ({ columns, data }) => {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (id: string) => {
    setOpen((o) => ({ ...o, [id]: !o[id] }));
  };

  const renderRows = (nodes: TreeNode[], depth = 0) =>
    nodes.map((node) => (
      <React.Fragment key={node.id}>
        <tr role="row" className="odd:bg-gray-50 dark:odd:bg-gray-800">
          {columns.map((c, idx) => (
            <td key={c.key} role="gridcell" className="px-4 py-2">
              {idx === 0 && node.children && (
                <button
                  className="mr-1"
                  onClick={() => toggle(node.id)}
                  aria-expanded={open[node.id]}
                >
                  {open[node.id] ? '-' : '+'}
                </button>
              )}
              <span style={{ paddingLeft: idx === 0 ? depth * 16 : 0 }}>{node[c.key] as React.ReactNode}</span>
            </td>
          ))}
        </tr>
        {node.children && open[node.id] && renderRows(node.children, depth + 1)}
      </React.Fragment>
    ));

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
      <tbody>{renderRows(data)}</tbody>
    </table>
  );
};

TreeTable.displayName = 'TreeTable';
