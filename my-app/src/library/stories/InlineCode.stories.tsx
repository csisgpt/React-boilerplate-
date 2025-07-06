import type { Meta, StoryObj } from '@storybook/react';
import { InlineCode } from '../components/typography/InlineCode';

const meta: Meta<typeof InlineCode> = {
  title: 'library/InlineCode',
  component: InlineCode,
  args: {
    children: 'inline code',
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
export const Default: StoryObj<typeof InlineCode> = {};
