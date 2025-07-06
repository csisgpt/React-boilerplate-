import type { Meta, StoryObj } from '@storybook/react';
import { SortableDraggableTable } from '../SortableDraggableTable';

const rows = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];
const columns = [{ key: 'name', title: 'Name' }];

const meta: Meta<typeof SortableDraggableTable> = {
  title: 'tables/SortableDraggableTable',
  component: SortableDraggableTable,
  args: { data: rows, columns },
};
export default meta;

export const Default: StoryObj<typeof SortableDraggableTable> = {};
