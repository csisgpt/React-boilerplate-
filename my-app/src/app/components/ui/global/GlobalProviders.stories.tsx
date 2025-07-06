import type { Meta, StoryObj } from '@storybook/react';
import { GlobalProviders } from './GlobalProviders';

const meta: Meta<typeof GlobalProviders> = {
  title: 'global/GlobalProviders',
  component: GlobalProviders,
  args: { children: 'Content' },
};
export default meta;
export const Default: StoryObj<typeof GlobalProviders> = {};
