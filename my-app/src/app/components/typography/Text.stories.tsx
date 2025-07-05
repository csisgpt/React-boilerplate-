import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'typography/Text',
  component: Text,
  args: { children: 'Text' },
};
export default meta;
export const Default: StoryObj<typeof Text> = {};
