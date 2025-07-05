import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'media/Skeleton',
  component: Skeleton,
  args: { children: 'Skeleton' },
};
export default meta;
export const Default: StoryObj<typeof Skeleton> = {};
