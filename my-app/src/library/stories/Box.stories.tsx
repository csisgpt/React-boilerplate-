import type { Meta, StoryObj } from '@storybook/react';
import { Box, Props } from '../components/primitives/Box';

const meta: Meta<Props> = {
  title: 'library/Primitives/Box',
  component: Box,
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
  args: { children: 'Box', p: '4', bg: 'gray-100' },
};
export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
export const AsArticle: Story = { args: { as: 'article' } };
export const CustomClass: Story = { args: { className: 'border' } };
