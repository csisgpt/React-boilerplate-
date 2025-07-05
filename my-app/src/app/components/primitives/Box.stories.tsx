import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'primitives/Box',
  component: Box,
  args: { children: 'Box' },
};
export default meta;
export const Default: StoryObj<typeof Box> = {};
