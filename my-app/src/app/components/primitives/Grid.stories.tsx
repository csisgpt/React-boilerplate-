import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'primitives/Grid',
  component: Grid,
  args: { children: 'Grid' },
};
export default meta;
export const Default: StoryObj<typeof Grid> = {};
