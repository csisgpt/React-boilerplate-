import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta: Meta<typeof Banner> = {
  title: 'feedback/Banner',
  component: Banner,
  args: { children: 'Banner' },
};
export default meta;
export const Default: StoryObj<typeof Banner> = {};
