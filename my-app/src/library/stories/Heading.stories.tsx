import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../components/typography/Heading';

const meta: Meta<typeof Heading> = {
  title: 'library/Heading',
  component: Heading,
  args: {
    children: 'Heading',
    level: 1,
    size: 'md',
    weight: 'normal',
    truncate: false,
    ellipsisLines: 1,
  },
  argTypes: {
    level: { control: { type: 'number', min: 1, max: 6 } },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    weight: { control: { type: 'select' }, options: ['normal', 'semibold', 'bold'] },
    truncate: { control: 'boolean' },
    ellipsisLines: { control: 'number' },
  },
};
export default meta;
export const Default: StoryObj<typeof Heading> = {};
