import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'navigation/Tabs',
  component: Tabs,
  args: { children: 'Tabs' },
};
export default meta;
export const Default: StoryObj<typeof Tabs> = {};
