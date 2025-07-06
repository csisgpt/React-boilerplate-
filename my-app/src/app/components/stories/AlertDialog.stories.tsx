import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { AlertDialog } from '@app/components/modals/AlertDialog';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof AlertDialog> = {
  title: 'modals/AlertDialog',
  component: AlertDialog,
};
export default meta;

export const Primary: StoryObj<typeof AlertDialog> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <AlertDialog isOpen={open} onClose={() => setOpen(false)} title="Alert" description="Something happened" />
      </>
    );
  },
};
