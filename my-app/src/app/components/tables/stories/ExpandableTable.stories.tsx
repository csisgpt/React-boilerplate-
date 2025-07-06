import type { Meta, StoryObj } from '@storybook/react';
import { ExpandableTable } from '../ExpandableTable';

const meta: Meta<typeof ExpandableTable> = {
  title: 'tables/ExpandableTable',
  component: ExpandableTable,
};
export default meta;

const columns = [
  { key: 'name', title: 'Name' },
  { key: 'age', title: 'Age' },
];
const data = [
  { name: 'Alice', age: 30, info: 'Extra info about Alice' },
  { name: 'Bob', age: 25, info: 'More about Bob' },
];

export const Primary: StoryObj<typeof ExpandableTable> = {
  args: {
    columns,
    data,
    renderExpanded: (row: any) => <div>{row.info}</div>,
  },
};
