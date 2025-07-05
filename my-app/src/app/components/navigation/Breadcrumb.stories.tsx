import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'navigation/Breadcrumb',
  component: Breadcrumb,
  args: { children: 'Breadcrumb' },
};
export default meta;
export const Default: StoryObj<typeof Breadcrumb> = {};
