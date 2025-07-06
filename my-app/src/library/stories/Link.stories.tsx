import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '../components/typography/Link';

const meta: Meta<typeof Link> = {
  title: 'library/Link',
  component: Link,
  args: {
    children: 'Link text',
    href: '#',
    external: false,
    size: 'md',
    weight: 'normal',
    truncate: false,
    ellipsisLines: 1,
  },
  argTypes: {
    href: { control: 'text' },
    external: { control: 'boolean' },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    weight: { control: { type: 'select' }, options: ['normal', 'semibold', 'bold'] },
    truncate: { control: 'boolean' },
    ellipsisLines: { control: 'number' },
  },
};
export default meta;
export const Default: StoryObj<typeof Link> = {};
