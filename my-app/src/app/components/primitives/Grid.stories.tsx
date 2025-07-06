import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridProps } from './Grid';

const meta: Meta<GridProps> = {
  title: 'primitives/Grid',
  component: Grid,
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
  args: { children: 'Grid', gap: '4' },
};
export default meta;

type Story = StoryObj<GridProps>;

export const Default: Story = {};
export const Responsive: Story = { args: { gap: { md: '8' } } };
