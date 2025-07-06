import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '@app/components/navigation/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'navigation/Dropdown',
  component: Dropdown,
};
export default meta;

export const Primary: StoryObj<typeof Dropdown> = {
  args: {
    label: 'Options',
    items: [{ label: 'Item 1' }, { label: 'Item 2' }],
  },
};
