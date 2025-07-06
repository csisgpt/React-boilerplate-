import type { Meta, StoryObj } from '@storybook/react';
import { TreeTable } from '../TreeTable';

const meta: Meta<typeof TreeTable> = {
  title: 'tables/TreeTable',
  component: TreeTable,
};
export default meta;

const columns = [
  { key: 'name', title: 'Name' },
];

const data = [
  { id: '1', data: { name: 'Root 1' } },
  { id: '2', parentId: '1', data: { name: 'Child 1' } },
  { id: '3', data: { name: 'Root 2' } },
];

export const Primary: StoryObj<typeof TreeTable> = {
  args: { columns, data },
};
