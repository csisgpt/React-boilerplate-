import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  title: 'forms/DateRangePicker',
  component: DateRangePicker,
  args: { name: 'range', label: 'Range' },
};
export default meta;
export const Default: StoryObj<typeof DateRangePicker> = {};
