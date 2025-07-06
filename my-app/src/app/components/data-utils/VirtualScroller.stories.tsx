import type { Meta, StoryObj } from '@storybook/react';
import { VirtualScroller, VirtualScrollerProps } from './VirtualScroller';

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

const meta: Meta<VirtualScrollerProps<string>> = {
  title: 'data-utils/VirtualScroller',
  component: VirtualScroller,
  args: {
    items,
    itemHeight: 30,
    height: 200,
    renderItem: (item: string) => <div className="px-2 border-b">{item}</div>,
  },
};
export default meta;

type Story = StoryObj<VirtualScrollerProps<string>>;

export const Default: Story = {};
