import type { Meta, StoryObj } from '@storybook/react';
import { NotificationCenter } from './NotificationCenter';

const meta: Meta<typeof NotificationCenter> = {
  title: 'feedback/NotificationCenter',
  component: NotificationCenter,
  args: { children: 'NotificationCenter' },
};
export default meta;
export const Default: StoryObj<typeof NotificationCenter> = {};
