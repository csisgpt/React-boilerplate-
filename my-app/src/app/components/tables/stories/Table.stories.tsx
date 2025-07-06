import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '../Table';

const meta: Meta<typeof Table> = {
  title: 'tables/Table',
  component: Table,
};
export default meta;

const columns = [
  { key: 'name', title: 'Name', sortable: true },
  { key: 'age', title: 'Age', sortable: true },
];
const data = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

export const Primary: StoryObj<typeof Table> = {
  args: { columns, data },
};
