import type { Meta, StoryObj } from '@storybook/react';
import { TreeView } from './TreeView';

const meta: Meta<typeof TreeView> = {
  title: 'data/TreeView',
  component: TreeView,
  args: { children: 'TreeView' },
};
export default meta;
export const Default: StoryObj<typeof TreeView> = {};
