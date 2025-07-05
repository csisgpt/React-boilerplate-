import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'feedback/Toast',
  component: Toast,
  args: { children: 'Toast' },
};
export default meta;
export const Default: StoryObj<typeof Toast> = {};
