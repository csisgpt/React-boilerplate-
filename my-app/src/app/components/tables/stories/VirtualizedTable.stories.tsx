import type { Meta, StoryObj } from '@storybook/react';
import { VirtualizedTable } from '../VirtualizedTable';

const meta: Meta<typeof VirtualizedTable> = {
  title: 'tables/VirtualizedTable',
  component: VirtualizedTable,
};
export default meta;

const columns = [
  { key: 'index', title: '#' },
  { key: 'name', title: 'Name' },
];
const data = Array.from({ length: 100 }, (_, i) => ({ index: i + 1, name: `Item ${i + 1}` }));

export const Primary: StoryObj<typeof VirtualizedTable> = {
  args: { columns, data, height: 200 },
};
