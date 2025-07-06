import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ConfirmDialog } from '@app/components/modals/ConfirmDialog';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof ConfirmDialog> = {
  title: 'modals/ConfirmDialog',
  component: ConfirmDialog,
};
export default meta;

export const Primary: StoryObj<typeof ConfirmDialog> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <ConfirmDialog isOpen={open} onClose={() => setOpen(false)} onConfirm={() => setOpen(false)} title="Confirm" />
      </>
    );
  },
};
