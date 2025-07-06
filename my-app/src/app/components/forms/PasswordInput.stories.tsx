import type { Meta, StoryObj } from '@storybook/react';
import { PasswordInput } from './PasswordInput';

const meta: Meta<typeof PasswordInput> = {
  title: 'forms/PasswordInput',
  component: PasswordInput,
  args: { name: 'password', label: 'Password' },
};
export default meta;
export const Default: StoryObj<typeof PasswordInput> = {};
