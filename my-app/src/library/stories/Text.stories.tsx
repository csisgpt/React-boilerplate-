import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/typography/Text';

const meta: Meta<typeof Text> = {
  title: 'library/Text',
  component: Text,
  args: {
    children: 'Sample text',
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
export const Default: StoryObj<typeof Text> = {};
