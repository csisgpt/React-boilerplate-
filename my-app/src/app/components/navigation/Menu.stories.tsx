import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta: Meta<typeof Menu> = {
  title: 'navigation/Menu',
  component: Menu,
  args: { children: 'Menu' },
};
export default meta;
export const Default: StoryObj<typeof Menu> = {};
