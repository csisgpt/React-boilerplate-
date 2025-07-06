import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveTable } from '../ResponsiveTable';

const rows = [
  { id: 1, name: 'Alice', age: 30, role: 'Dev' },
  { id: 2, name: 'Bob', age: 24, role: 'Design' },
];
const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
  { key: 'role', title: 'Role' },
];

const meta: Meta<typeof ResponsiveTable> = {
  title: 'tables/ResponsiveTable',
  component: ResponsiveTable,
  args: { data: rows, columns },
};
export default meta;

export const Default: StoryObj<typeof ResponsiveTable> = {};
