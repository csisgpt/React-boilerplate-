import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../../components/inputs/Input';

const meta: Meta<typeof Input> = {
  title: 'library/Inputs/Input',
  component: Input,
  args: {
    name: 'field',
    label: 'Label',
    placeholder: 'Enter text',
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
export const Default: StoryObj<typeof Input> = {};
