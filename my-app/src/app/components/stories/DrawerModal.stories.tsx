import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Drawer } from '@app/components/modals/Drawer';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof Drawer> = {
  title: 'modals/Drawer',
  component: Drawer,
};
export default meta;

export const Primary: StoryObj<typeof Drawer> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Drawer isOpen={open} onClose={() => setOpen(false)} placement="left">
          Drawer Content
        </Drawer>
      </>
    );
  },
};
