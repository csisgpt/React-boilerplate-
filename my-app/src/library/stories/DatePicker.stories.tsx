import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker, Props } from '../components/inputs/DatePicker';

const meta: Meta<Props> = {
  title: 'library/Inputs/DatePicker',
  component: DatePicker,
  argTypes: {
    calendar: { control: 'radio', options: ['gregorian', 'jalali'] },
    locale: { control: 'text' },
  },
  args: { name: 'date', onChange: () => {} },
};
export default meta;

type Story = StoryObj<Props>;

export const Gregorian: Story = {
  args: { calendar: 'gregorian', locale: 'en-US' },
};

export const Jalali: Story = {
  args: { calendar: 'jalali', locale: 'fa-IR' },
};
