import type { Meta, StoryObj } from '@storybook/react';
import { VirtualScroller } from './VirtualScroller';

const meta: Meta<typeof VirtualScroller> = {
  title: 'data-utils/VirtualScroller',
  component: VirtualScroller,
  args: { children: 'VirtualScroller' },
};
export default meta;
export const Default: StoryObj<typeof VirtualScroller> = {};
