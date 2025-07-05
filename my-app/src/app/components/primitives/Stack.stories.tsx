import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';

const meta: Meta<typeof Stack> = {
  title: 'primitives/Stack',
  component: Stack,
  args: { children: 'Stack' },
};
export default meta;
export const Default: StoryObj<typeof Stack> = {};
