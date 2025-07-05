import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'forms/DatePicker',
  component: DatePicker,
  args: { children: 'DatePicker' },
};
export default meta;
export const Default: StoryObj<typeof DatePicker> = {};
