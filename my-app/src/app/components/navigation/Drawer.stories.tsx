import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'navigation/Drawer',
  component: Drawer,
  args: { children: 'Drawer' },
};
export default meta;
export const Default: StoryObj<typeof Drawer> = {};
