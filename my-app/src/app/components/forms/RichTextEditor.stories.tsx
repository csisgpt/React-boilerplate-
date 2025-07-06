import type { Meta, StoryObj } from '@storybook/react';
import { RichTextEditor } from './RichTextEditor';

const meta: Meta<typeof RichTextEditor> = {
  title: 'forms/RichTextEditor',
  component: RichTextEditor,
  args: { name: 'rte', label: 'Editor' },
};
export default meta;
export const Default: StoryObj<typeof RichTextEditor> = {};
