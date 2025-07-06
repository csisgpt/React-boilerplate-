import type { Meta, StoryObj } from '@storybook/react';
import { ExportableTable } from '../ExportableTable';

const meta: Meta<typeof ExportableTable> = {
  title: 'tables/ExportableTable',
  component: ExportableTable,
};
export default meta;

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
];
const data = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
];

export const Primary: StoryObj<typeof ExportableTable> = {
  args: { columns, data },
};
