import type { Meta, StoryObj } from '@storybook/react';
import { GlobalStyles } from './GlobalStyles';

const meta: Meta<typeof GlobalStyles> = {
  title: 'global/GlobalStyles',
  component: GlobalStyles,
};
export default meta;
export const Default: StoryObj<typeof GlobalStyles> = {};
