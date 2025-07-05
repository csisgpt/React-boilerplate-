import type { Meta, StoryObj } from '@storybook/react';
import { DragDropList } from './DragDropList';

const meta: Meta<typeof DragDropList> = {
  title: 'interaction/DragDropList',
  component: DragDropList,
  args: { children: 'DragDropList' },
};
export default meta;
export const Default: StoryObj<typeof DragDropList> = {};
