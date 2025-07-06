import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '../components/typography/CodeBlock';

const meta: Meta<typeof CodeBlock> = {
  title: 'library/CodeBlock',
  component: CodeBlock,
  args: {
    children: 'const a = 1;',
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
export const Default: StoryObj<typeof CodeBlock> = {};
