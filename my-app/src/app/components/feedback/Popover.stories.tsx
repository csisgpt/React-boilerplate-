import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';

const meta: Meta<typeof Popover> = {
  title: 'feedback/Popover',
  component: Popover,
  args: { children: 'Popover' },
};
export default meta;
export const Default: StoryObj<typeof Popover> = {};
