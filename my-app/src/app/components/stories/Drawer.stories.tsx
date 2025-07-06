import type { Meta, StoryObj } from '@storybook/react';
import { Drawer } from '@app/components/navigation/Drawer';
import { useState } from 'react';

const meta: Meta<typeof Drawer> = {
  title: 'navigation/Drawer',
  component: Drawer,
};
export default meta;

export const Primary: StoryObj = {
  render: () => {
    const [open, setOpen] = useState(true);
    return <Drawer open={open} onClose={() => setOpen(false)}>Content</Drawer>;
  },
};
