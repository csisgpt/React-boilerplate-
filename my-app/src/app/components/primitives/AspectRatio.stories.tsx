import type { Meta, StoryObj } from '@storybook/react';
import { AspectRatio, AspectRatioProps } from './AspectRatio';

const meta: Meta<AspectRatioProps> = {
  title: 'primitives/AspectRatio',
  component: AspectRatio,
  argTypes: {
    as: { control: 'text' },
    ratio: { control: 'text' },
    w: { control: 'object' },
    h: { control: 'object' },
    p: { control: 'object' },
    m: { control: 'object' },
    gap: { control: 'object' },
    bg: { control: 'text' },
    textColor: { control: 'text' },
    className: { control: 'text' },
  },
  args: { ratio: '16/9', bg: 'gray-100' },
};
export default meta;

type Story = StoryObj<AspectRatioProps>;

export const Default: Story = {};
export const Square: Story = { args: { ratio: '1/1' } };
