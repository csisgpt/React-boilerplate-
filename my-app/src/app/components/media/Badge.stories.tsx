import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'media/Badge',
  component: Badge,
  args: { children: 'Badge' },
};
export default meta;
export const Default: StoryObj<typeof Badge> = {};
