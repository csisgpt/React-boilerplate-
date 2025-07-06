import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonTable } from '../ComparisonTable';

const meta: Meta<typeof ComparisonTable> = {
  title: 'tables/ComparisonTable',
  component: ComparisonTable,
};
export default meta;

const rows = [
  { key: 'name', label: 'Name', a: 'Alice', b: 'Alicia' },
  { key: 'age', label: 'Age', a: 30, b: 30 },
];

export const Primary: StoryObj<typeof ComparisonTable> = {
  args: { rows },
};
