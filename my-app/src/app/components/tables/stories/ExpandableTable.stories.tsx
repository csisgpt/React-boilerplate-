import type { Meta, StoryObj } from '@storybook/react';
import { ExpandableTable } from '../ExpandableTable';

const rows = [
  { id: 1, name: 'Alice', info: 'Developer' },
  { id: 2, name: 'Bob', info: 'Designer' },
];
const columns = [{ key: 'name', title: 'Name' }];

const meta: Meta<typeof ExpandableTable> = {
  title: 'tables/ExpandableTable',
  component: ExpandableTable,
  args: {
    data: rows,
    columns,
    renderExpanded: (row) => <div>{row.info}</div>,
  },
};
export default meta;

export const Default: StoryObj<typeof ExpandableTable> = {};
