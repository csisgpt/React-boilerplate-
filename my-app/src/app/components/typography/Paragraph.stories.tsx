import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'typography/Paragraph',
  component: Paragraph,
  args: { children: 'Paragraph' },
};
export default meta;
export const Default: StoryObj<typeof Paragraph> = {};
