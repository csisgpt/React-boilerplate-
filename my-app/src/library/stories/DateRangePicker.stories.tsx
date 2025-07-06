import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker, Props } from '../components/inputs/DateRangePicker';

const meta: Meta<Props> = {
  title: 'library/Inputs/DateRangePicker',
  component: DateRangePicker,
  argTypes: {
    calendar: { control: 'radio', options: ['gregorian', 'jalali'] },
    locale: { control: 'text' },
  },
  args: { name: 'range', onChange: () => {} },
};
export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
