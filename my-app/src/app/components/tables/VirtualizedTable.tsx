import React from 'react';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { Column } from './Table';

export interface VirtualizedTableProps {
  columns: Column[];
  data: any[];
  height: number;
  rowHeight?: number;
}

/**
 * Virtualized table for large data sets using react-window.
 */
export const VirtualizedTable: React.FC<VirtualizedTableProps> = ({ columns, data, height, rowHeight = 35 }) => {
  const Row = ({ index, style }: ListChildComponentProps) => (
    <div style={style} className="flex divide-x divide-gray-200">
      {columns.map(col => (
        <div key={col.key} className="flex-1 px-2 py-1 whitespace-nowrap overflow-hidden text-ellipsis">
          {data[index][col.key]}
        </div>
      ))}
    </div>
  );

  return (
    <div role="table" className="border divide-y divide-gray-200">
      <div className="flex bg-gray-50 dark:bg-gray-800 font-medium text-sm">
        {columns.map(col => (
          <div key={col.key} className="flex-1 px-2 py-1">
            {col.title}
          </div>
        ))}
      </div>
      <List height={height} itemCount={data.length} itemSize={rowHeight} width="100%">
        {Row}
      </List>
    </div>
  );
};
