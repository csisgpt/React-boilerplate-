import type { Meta, StoryObj } from '@storybook/react';
import { ResponsiveTable } from '../ResponsiveTable';

const meta: Meta<typeof ResponsiveTable> = {
  title: 'tables/ResponsiveTable',
  component: ResponsiveTable,
};
export default meta;

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age', hiddenSm: true },
  { key: 'city', title: 'City' },
];
const data = [
  { name: 'Alice', age: 30, city: 'New York' },
  { name: 'Bob', age: 25, city: 'London' },
];

export const Primary: StoryObj<typeof ResponsiveTable> = {
  args: { columns, data },
};
