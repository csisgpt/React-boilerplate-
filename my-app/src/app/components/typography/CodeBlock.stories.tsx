import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';

const meta: Meta<typeof CodeBlock> = {
  title: 'typography/CodeBlock',
  component: CodeBlock,
  args: { children: 'CodeBlock' },
};
export default meta;
export const Default: StoryObj<typeof CodeBlock> = {};
