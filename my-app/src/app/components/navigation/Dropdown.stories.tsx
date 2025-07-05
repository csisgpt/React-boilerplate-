import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'navigation/Dropdown',
  component: Dropdown,
  args: { children: 'Dropdown' },
};
export default meta;
export const Default: StoryObj<typeof Dropdown> = {};
