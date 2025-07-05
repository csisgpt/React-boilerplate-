import type { Meta, StoryObj } from '@storybook/react';
import { SuspenseFallback } from './SuspenseFallback';

const meta: Meta<typeof SuspenseFallback> = {
  title: 'interaction/SuspenseFallback',
  component: SuspenseFallback,
  args: { children: 'SuspenseFallback' },
};
export default meta;
export const Default: StoryObj<typeof SuspenseFallback> = {};
