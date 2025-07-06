import type { Meta, StoryObj } from '@storybook/react';
import { TreeTable, TreeNode } from '../TreeTable';

const rows: TreeNode[] = [
  {
    id: '1',
    name: 'Parent',
    children: [
      { id: '2', name: 'Child 1' },
      { id: '3', name: 'Child 2' },
    ],
  },
];
const columns = [{ key: 'name', title: 'Name' }];

const meta: Meta<typeof TreeTable> = {
  title: 'tables/TreeTable',
  component: TreeTable,
  args: { data: rows, columns },
};
export default meta;

export const Default: StoryObj<typeof TreeTable> = {};
