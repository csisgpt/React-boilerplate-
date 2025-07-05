import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar } from './ProgressBar';

const meta: Meta<typeof ProgressBar> = {
  title: 'media/ProgressBar',
  component: ProgressBar,
  args: { children: 'ProgressBar' },
};
export default meta;
export const Default: StoryObj<typeof ProgressBar> = {};
