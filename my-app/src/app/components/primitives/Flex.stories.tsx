import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';

const meta: Meta<typeof Flex> = {
  title: 'primitives/Flex',
  component: Flex,
  args: { children: 'Flex' },
};
export default meta;
export const Default: StoryObj<typeof Flex> = {};
