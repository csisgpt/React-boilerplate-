import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '@app/components/navigation/Menu';

const meta: Meta<typeof Menu> = {
  title: 'navigation/Menu',
  component: Menu,
};
export default meta;

export const Primary: StoryObj<typeof Menu> = {
  args: {
    items: [{ label: 'A' }, { label: 'B' }],
  },
};
