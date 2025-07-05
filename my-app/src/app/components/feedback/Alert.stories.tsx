import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'feedback/Alert',
  component: Alert,
  args: { children: 'Alert' },
};
export default meta;
export const Default: StoryObj<typeof Alert> = {};
