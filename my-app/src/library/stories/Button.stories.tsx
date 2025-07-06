import type { Meta, StoryObj } from '@storybook/react';
import { Button, Props } from '../components/inputs/Button';

const meta: Meta<Props> = {
  title: 'library/Inputs/Button',
  component: Button,
  args: {
    children: 'Button',
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
export const WithIcons: StoryObj<Props> = { args: { leftIcon: '⬅️', rightIcon: '➡️' } };
