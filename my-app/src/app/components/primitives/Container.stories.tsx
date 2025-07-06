import type { Meta, StoryObj } from '@storybook/react';
import { Container, ContainerProps } from './Container';

const meta: Meta<ContainerProps> = {
  title: 'primitives/Container',
  component: Container,
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
  args: { children: 'Container' },
};
export default meta;

type Story = StoryObj<ContainerProps>;

export const Default: Story = {};
export const Padded: Story = { args: { p: '4' } };
