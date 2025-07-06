import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'forms/Input',
  component: Input,
  args: { name: 'input', label: 'Input', placeholder: 'Type...' },
};
export default meta;
export const Default: StoryObj<typeof Input> = {};
