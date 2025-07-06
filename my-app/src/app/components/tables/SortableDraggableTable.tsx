import React from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Column } from './Table';

export interface SortableDraggableTableProps {
  columns: Column[];
  data: any[];
  onSortChange?: (data: any[]) => void;
}

/**
 * Drag-and-drop row reordering table.
 */
export const SortableDraggableTable: React.FC<SortableDraggableTableProps> = ({ columns, data, onSortChange }) => {
  const [rows, setRows] = React.useState(() => data.map(r => ({ ...r })));

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const newRows = Array.from(rows);
    const [moved] = newRows.splice(result.source.index, 1);
    newRows.splice(result.destination.index, 0, moved);
    setRows(newRows);
    onSortChange?.(newRows);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="table">
        {provided => (
          <table ref={provided.innerRef} {...provided.droppableProps} className="min-w-full divide-y divide-gray-200" role="table">
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
              {rows.map((row, idx) => (
                <Draggable key={idx} draggableId={String(idx)} index={idx}>
                  {prov => (
                    <tr ref={prov.innerRef} {...prov.draggableProps} {...prov.dragHandleProps} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      {columns.map(col => (
                        <td key={col.key} className="px-4 py-2 whitespace-nowrap">
                          {row[col.key]}
                        </td>
                      ))}
                    </tr>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </tbody>
          </table>
        )}
      </Droppable>
    </DragDropContext>
  );
};
