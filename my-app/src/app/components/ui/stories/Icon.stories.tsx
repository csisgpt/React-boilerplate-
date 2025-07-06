import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@app/components/ui/Icon';

const meta: Meta<typeof Icon> = {
  title: 'ui/Icon',
  component: Icon,
  args: { name: 'check', size: 24 },
};
export default meta;

export const Default: StoryObj<typeof Icon> = {};
