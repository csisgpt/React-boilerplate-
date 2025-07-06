import type { Meta, StoryObj } from '@storybook/react';
import { InlineCode, InlineCodeProps } from './InlineCode';

const meta: Meta<InlineCodeProps> = {
  title: 'typography/InlineCode',
  component: InlineCode,
  parameters: { docs: { description: { component: "Usage of the component" } } },
  args: { children: 'code' },
};
export default meta;
export const Default: StoryObj<InlineCodeProps> = {};
