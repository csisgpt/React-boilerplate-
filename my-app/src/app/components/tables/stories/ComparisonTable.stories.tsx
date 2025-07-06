import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonTable } from '../ComparisonTable';

const rows = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];
const columns = [{ key: 'name', title: 'Name' }];

const meta: Meta<typeof ComparisonTable> = {
  title: 'tables/ComparisonTable',
  component: ComparisonTable,
  args: { data: rows, columns },
};
export default meta;

export const Default: StoryObj<typeof ComparisonTable> = {};
