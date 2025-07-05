import type { Meta, StoryObj } from '@storybook/react';
import { BackToTop } from './BackToTop';

const meta: Meta<typeof BackToTop> = {
  title: 'interaction/BackToTop',
  component: BackToTop,
  args: { children: 'BackToTop' },
};
export default meta;
export const Default: StoryObj<typeof BackToTop> = {};
