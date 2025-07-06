import type { Meta, StoryObj } from '@storybook/react';
import { MaskedInput, Props } from '../components/inputs/MaskedInput';

const meta: Meta<Props> = {
  title: 'library/Inputs/MaskedInput',
  component: MaskedInput,
  argTypes: {
    maskPattern: { control: 'text' },
    maskChar: { control: 'text' },
    value: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    maskPattern: '###-###',
  },
};
export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
