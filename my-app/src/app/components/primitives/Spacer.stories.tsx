import type { Meta, StoryObj } from '@storybook/react';
import { Spacer, SpacerProps } from './Spacer';

const meta: Meta<SpacerProps> = {
  title: 'primitives/Spacer',
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

type Story = StoryObj<SpacerProps>;

export const Default: Story = {};
