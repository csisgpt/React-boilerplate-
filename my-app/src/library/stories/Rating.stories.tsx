import type { Meta, StoryObj } from '@storybook/react';
import { Rating, Props } from '../components/inputs/Rating';

const meta: Meta<Props> = {
  title: 'library/Inputs/Rating',
  component: Rating,
  argTypes: {
    max: { control: 'number' },
    value: { control: 'number' },
    readOnly: { control: 'boolean' },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    className: { control: 'text' },
  },
  args: { max: 5, size: 'md' },
};
export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
