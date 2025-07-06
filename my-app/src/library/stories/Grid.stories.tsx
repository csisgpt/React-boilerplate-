import type { Meta, StoryObj } from '@storybook/react';
import { Grid, Props } from '../components/primitives/Grid';

const meta: Meta<Props> = {
  title: 'library/Primitives/Grid',
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

type Story = StoryObj<Props>;

export const Default: Story = {};
export const Responsive: Story = { args: { gap: { md: '8' } } };
