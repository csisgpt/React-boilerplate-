import type { Meta, StoryObj } from '@storybook/react';
import { VirtualList } from './VirtualList';

const meta: Meta<typeof VirtualList> = {
  title: 'data/VirtualList',
  component: VirtualList,
  args: { children: 'VirtualList' },
};
export default meta;
export const Default: StoryObj<typeof VirtualList> = {};
