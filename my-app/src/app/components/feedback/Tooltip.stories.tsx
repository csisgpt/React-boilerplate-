import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'feedback/Tooltip',
  component: Tooltip,
  args: { children: 'Tooltip' },
};
export default meta;
export const Default: StoryObj<typeof Tooltip> = {};
