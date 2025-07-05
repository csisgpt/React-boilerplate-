import type { Meta, StoryObj } from '@storybook/react';
import { InlineCode } from './InlineCode';

const meta: Meta<typeof InlineCode> = {
  title: 'typography/InlineCode',
  component: InlineCode,
  args: { children: 'InlineCode' },
};
export default meta;
export const Default: StoryObj<typeof InlineCode> = {};
