import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta: Meta<typeof Textarea> = {
  title: 'forms/Textarea',
  component: Textarea,
  args: { name: 'textarea', label: 'Textarea', placeholder: 'Text here...' },
};
export default meta;
export const Default: StoryObj<typeof Textarea> = {};
