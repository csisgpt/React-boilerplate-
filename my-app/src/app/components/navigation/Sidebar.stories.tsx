import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'navigation/Sidebar',
  component: Sidebar,
  args: { children: 'Sidebar' },
};
export default meta;
export const Default: StoryObj<typeof Sidebar> = {};
