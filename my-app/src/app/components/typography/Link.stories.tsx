import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'typography/Link',
  component: Link,
  args: { children: 'Link' },
};
export default meta;
export const Default: StoryObj<typeof Link> = {};
