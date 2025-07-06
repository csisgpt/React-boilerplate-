import type { Meta, StoryObj } from '@storybook/react';
import { ExportableTable } from '../ExportableTable';

const rows = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const columns = [{ key: 'name', title: 'Name' }];

const meta: Meta<typeof ExportableTable> = {
  title: 'tables/ExportableTable',
  component: ExportableTable,
  args: { data: rows, columns },
};
export default meta;

export const Default: StoryObj<typeof ExportableTable> = {};
