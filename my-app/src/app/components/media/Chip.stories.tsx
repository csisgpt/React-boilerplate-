import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';

const meta: Meta<typeof Chip> = {
  title: 'media/Chip',
  component: Chip,
  args: { children: 'Chip' },
};
export default meta;
export const Default: StoryObj<typeof Chip> = {};
