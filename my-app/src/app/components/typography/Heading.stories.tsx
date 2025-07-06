import type { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

const meta: Meta<HeadingProps> = {
  title: 'typography/Heading',
  component: Heading,
  parameters: { docs: { description: { component: "Usage of the component" } } },
  args: { children: 'Heading', level: 1 },
  argTypes: {
    level: { control: 'number', min: 1, max: 6 },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    weight: { control: 'radio', options: ['normal', 'semibold', 'bold'] },
  },
};
export default meta;
export const Default: StoryObj<HeadingProps> = {};
