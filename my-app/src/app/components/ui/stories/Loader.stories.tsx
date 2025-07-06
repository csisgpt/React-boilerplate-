import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from '@app/components/ui/Loader';

const meta: Meta<typeof Loader> = {
  title: 'ui/Loader',
  component: Loader,
  args: { size: 'md', label: 'Loading...' },
};
export default meta;

export const Default: StoryObj<typeof Loader> = {};
