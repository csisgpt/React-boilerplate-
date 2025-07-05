import type { Meta, StoryObj } from '@storybook/react';
import { Center } from './Center';

const meta: Meta<typeof Center> = {
  title: 'primitives/Center',
  component: Center,
  args: { children: 'Center' },
};
export default meta;
export const Default: StoryObj<typeof Center> = {};
