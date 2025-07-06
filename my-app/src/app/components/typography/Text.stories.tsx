import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

const meta: Meta<TextProps> = {
  title: 'typography/Text',
  component: Text,
  parameters: { docs: { description: { component: "Usage of the component" } } },
  args: { children: 'Example text', size: 'md', weight: 'normal' },
  argTypes: {
    as: { control: 'text' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    weight: { control: 'radio', options: ['normal', 'semibold', 'bold'] },
    truncate: { control: 'boolean' },
  },
};
export default meta;
export const Default: StoryObj<TextProps> = {};
