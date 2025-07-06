import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock, CodeBlockProps } from './CodeBlock';

const meta: Meta<CodeBlockProps> = {
  title: 'typography/CodeBlock',
  component: CodeBlock,
  parameters: { docs: { description: { component: "Usage of the component" } } },
  args: { children: 'const a = 1;', language: 'ts' },
  argTypes: {
    language: { control: 'text' },
  },
};
export default meta;
export const Default: StoryObj<CodeBlockProps> = {};
