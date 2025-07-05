import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'primitives/Container',
  component: Container,
  args: { children: 'Container' },
};
export default meta;
export const Default: StoryObj<typeof Container> = {};
