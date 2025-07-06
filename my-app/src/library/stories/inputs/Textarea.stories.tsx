import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from '../../components/inputs/Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'library/Inputs/Textarea',
  component: Textarea,
  args: {
    name: 'area',
    label: 'Textarea',
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
export const Default: StoryObj<typeof Textarea> = {};
