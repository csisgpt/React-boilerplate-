import type { Meta, StoryObj } from '@storybook/react';
import { VirtualizedTable } from '../VirtualizedTable';

const rows = Array.from({ length: 100 }, (_, i) => ({ id: i, name: `Row ${i}` }));
const columns = [{ key: 'name', title: 'Name' }];

const meta: Meta<typeof VirtualizedTable> = {
  title: 'tables/VirtualizedTable',
  component: VirtualizedTable,
  args: {
    data: rows,
    columns,
    height: 200,
    rowHeight: 30,
  },
};
export default meta;

export const Default: StoryObj<typeof VirtualizedTable> = {};
