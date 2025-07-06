import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker, Props } from '../components/inputs/TimePicker';

const meta: Meta<Props> = {
  title: 'library/Inputs/TimePicker',
  component: TimePicker,
  argTypes: {
    locale: { control: 'text' },
  },
  args: { name: 'time', onChange: () => {} },
};
export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
