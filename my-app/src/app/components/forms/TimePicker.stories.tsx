import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';

const meta: Meta<typeof TimePicker> = {
  title: 'forms/TimePicker',
  component: TimePicker,
  args: { name: 'time', label: 'Time' },
};
export default meta;
export const Default: StoryObj<typeof TimePicker> = {};
