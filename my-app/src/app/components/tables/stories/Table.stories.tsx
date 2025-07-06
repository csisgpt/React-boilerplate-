import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../Table';

const rows = [
  { id: 1, name: 'Alice', age: 30 },
  { id: 2, name: 'Bob', age: 24 },
  { id: 3, name: 'Charlie', age: 29 },
];
const columns = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'age', title: 'Age', sortable: true },
];

const meta: Meta<typeof Table> = {
  title: 'tables/Table',
  component: Table,
  args: {
    data: rows,
    columns,
    sortable: true,
  },
};
export default meta;

export const Default: StoryObj<typeof Table> = {};
