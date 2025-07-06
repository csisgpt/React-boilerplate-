import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../components/typography/Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'library/Paragraph',
  component: Paragraph,
  args: {
    children: 'Paragraph',
    size: 'md',
    weight: 'normal',
    truncate: false,
    ellipsisLines: 1,
  },
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    weight: { control: { type: 'select' }, options: ['normal', 'semibold', 'bold'] },
    truncate: { control: 'boolean' },
    ellipsisLines: { control: 'number' },
  },
};
export default meta;
export const Default: StoryObj<typeof Paragraph> = {};
