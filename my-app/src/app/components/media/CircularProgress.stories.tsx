import type { Meta, StoryObj } from '@storybook/react';
import { CircularProgress } from './CircularProgress';

const meta: Meta<typeof CircularProgress> = {
  title: 'media/CircularProgress',
  component: CircularProgress,
  args: { children: 'CircularProgress' },
};
export default meta;
export const Default: StoryObj<typeof CircularProgress> = {};
