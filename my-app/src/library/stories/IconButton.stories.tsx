import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, Props } from '../components/inputs/IconButton';

const meta: Meta<Props> = {
  title: 'library/Inputs/IconButton',
  component: IconButton,
  args: {
    children: '⭐',
    variant: 'primary',
    size: 'md',
    isLoading: false,
  },
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'ghost'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    isLoading: { control: 'boolean' },
    leftIcon: { control: 'text' },
    rightIcon: { control: 'text' },
    className: { control: 'text' },
    analyticsKey: { control: 'text' },
  },
};
export default meta;
export const Default: StoryObj<Props> = {};
export const Loading: StoryObj<Props> = { args: { isLoading: true } };
