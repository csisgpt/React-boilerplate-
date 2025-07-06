import type { Meta, StoryObj } from '@storybook/react';
import { TreeView } from './TreeView';

const treeData = [
  {
    id: '1',
    label: 'Parent',
    children: [
      { id: '1-1', label: 'Child A' },
      { id: '1-2', label: 'Child B' },
    ],
  },
];

const meta: Meta<typeof TreeView> = {
  title: 'data/TreeView',
  component: TreeView,
  args: { data: treeData },
};
export default meta;

export const Default: StoryObj<typeof TreeView> = {};
