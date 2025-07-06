import type { Meta, StoryObj } from '@storybook/react';
import { SortableDraggableTable } from '../SortableDraggableTable';

const meta: Meta<typeof SortableDraggableTable> = {
  title: 'tables/SortableDraggableTable',
  component: SortableDraggableTable,
};
export default meta;

const columns = [
  { key: 'name', title: 'Name' },
];
const data = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Carol' },
];

export const Primary: StoryObj<typeof SortableDraggableTable> = {
  args: { columns, data },
};
