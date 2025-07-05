import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from './DateRangePicker';

const meta: Meta<typeof DateRangePicker> = {
  title: 'forms/DateRangePicker',
  component: DateRangePicker,
  args: { children: 'DateRangePicker' },
};
export default meta;
export const Default: StoryObj<typeof DateRangePicker> = {};
