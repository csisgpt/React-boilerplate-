import type { Meta, StoryObj } from '@storybook/react';
import { Spacer, Props } from '../components/primitives/Spacer';

const meta: Meta<Props> = {
  title: 'library/Primitives/Spacer',
  component: Spacer,
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
  args: {},
};
export default meta;

type Story = StoryObj<Props>;

export const Default: Story = {};
