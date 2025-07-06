import type { Meta, StoryObj } from '@storybook/react';
import { Link, LinkProps } from './Link';

const meta: Meta<LinkProps> = {
  title: 'typography/Link',
  component: Link,
  parameters: { docs: { description: { component: "Usage of the component" } } },
  args: { href: '#', children: 'Link' },
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'secondary'] },
    external: { control: 'boolean' },
  },
};
export default meta;
export const Default: StoryObj<LinkProps> = {};
