import type { Meta, StoryObj } from '@storybook/react';
import { Rating, RatingProps } from '../components/inputs/Rating';

const meta: Meta<RatingProps> = {
  title: 'library/Inputs/Rating',
  component: Rating,
  argTypes: {
    max: { control: 'number' },
    value: { control: 'number' },
    defaultValue: { control: 'number' },
    readOnly: { control: 'boolean' },
    size: { control: 'number' },
    className: { control: 'text' },
  },
  args: {
    max: 5,
    defaultValue: 3,
    readOnly: false,
    size: 24,
  },
};
export default meta;

export const Default: StoryObj<RatingProps> = {};
