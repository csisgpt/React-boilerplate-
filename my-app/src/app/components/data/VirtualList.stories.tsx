import type { Meta, StoryObj } from '@storybook/react';
import { VirtualList } from './VirtualList';

const items = Array.from({ length: 1000 }).map((_, i) => `Item ${i + 1}`);

const meta: Meta<typeof VirtualList<string>> = {
  title: 'data/VirtualList',
  component: VirtualList<string>,
  args: {
    data: items,
    height: 200,
    itemHeight: 30,
  },
};
export default meta;

export const Default: StoryObj<typeof VirtualList<string>> = {
  args: {
    renderItem: (item: string) => <div className="px-2 py-1">{item}</div>,
  },
};
