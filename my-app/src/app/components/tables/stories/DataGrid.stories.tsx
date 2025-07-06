import type { Meta, StoryObj } from '@storybook/react';
import { DataGrid } from '../DataGrid';

const meta: Meta<typeof DataGrid> = {
  title: 'tables/DataGrid',
  component: DataGrid,
};
export default meta;

const columns = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'age', title: 'Age', sortable: true },
];
const data = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Carol', age: 40 },
];

export const Primary: StoryObj<typeof DataGrid> = {
  args: { columns, data, pageSize: 2 },
};
