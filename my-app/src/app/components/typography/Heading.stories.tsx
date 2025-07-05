import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'typography/Heading',
  component: Heading,
  args: { children: 'Heading' },
};
export default meta;
export const Default: StoryObj<typeof Heading> = {};
