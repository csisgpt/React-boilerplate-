import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './Snackbar';

const meta: Meta<typeof Snackbar> = {
  title: 'feedback/Snackbar',
  component: Snackbar,
  args: { children: 'Snackbar' },
};
export default meta;
export const Default: StoryObj<typeof Snackbar> = {};
