import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from '../../components/inputs/PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'library/Inputs/PasswordInput',
  component: PasswordInput,
  args: {
    name: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    variant: 'outline',
    size: 'md',
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    rules: { control: 'object' },
    variant: { control: 'select', options: ['outline', 'filled'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};
export default meta;
export const Default: StoryObj<typeof PasswordInput> = {};
