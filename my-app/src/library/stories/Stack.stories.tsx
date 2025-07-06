import type { Meta, StoryObj } from '@storybook/react';
import { Stack, Props } from '../components/primitives/Stack';

const meta: Meta<Props> = {
  title: 'library/Primitives/Stack',
  component: Stack,
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
  args: { children: 'Stack', gap: '2' },
};
export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
export const WithPadding: Story = { args: { p: '2' } };
