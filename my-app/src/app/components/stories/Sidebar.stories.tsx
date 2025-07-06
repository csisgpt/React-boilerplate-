import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '@app/components/navigation/Sidebar';
import { useState } from 'react';

const meta: Meta<typeof Sidebar> = {
  title: 'navigation/Sidebar',
  component: Sidebar,
};
export default meta;

export const Primary: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(true);
    return <Sidebar open={open} onClose={() => setOpen(false)}>Menu</Sidebar>;
  },
};
