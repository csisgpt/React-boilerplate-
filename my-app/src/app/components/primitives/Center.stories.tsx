import type { Meta, StoryObj } from '@storybook/react';
import { Center, CenterProps } from './Center';

const meta: Meta<CenterProps> = {
  title: 'primitives/Center',
  component: Center,
  argTypes: {
    as: { control: 'text' },
    w: { control: 'object' },
    h: { control: 'object' },
    p: { control: 'object' },
    m: { control: 'object' },
    gap: { control: 'object' },
    bg: { control: 'text' },
    textColor: { control: 'text' },
    className: { control: 'text' },
  },
  args: { children: 'Center' },
};
export default meta;

type Story = StoryObj<CenterProps>;

export const Default: Story = {};
export const WithBg: Story = { args: { bg: 'gray-200', p: '4' } };
