import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph, ParagraphProps } from './Paragraph';

const meta: Meta<ParagraphProps> = {
  title: 'typography/Paragraph',
  component: Paragraph,
  parameters: { docs: { description: { component: "Usage of the component" } } },
  args: { children: 'Paragraph text' },
  argTypes: {
    leading: { control: 'text' },
  },
};
export default meta;
export const Default: StoryObj<ParagraphProps> = {};
