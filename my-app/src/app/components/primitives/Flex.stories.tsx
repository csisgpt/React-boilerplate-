import type { Meta, StoryObj } from '@storybook/react';
import { Flex, FlexProps } from './Flex';

const meta: Meta<FlexProps> = {
  title: 'primitives/Flex',
  component: Flex,
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
  args: { children: 'Flex', gap: '2' },
};
export default meta;

type Story = StoryObj<FlexProps>;

export const Default: Story = {};
export const WithClass: Story = { args: { className: 'border' } };
