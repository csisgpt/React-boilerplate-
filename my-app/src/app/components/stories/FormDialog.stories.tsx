import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FormDialog } from '@app/components/modals/FormDialog';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof FormDialog> = {
  title: 'modals/FormDialog',
  component: FormDialog,
};
export default meta;

export const Primary: StoryObj<typeof FormDialog> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <FormDialog isOpen={open} onClose={() => setOpen(false)} onSubmit={(e) => { e.preventDefault(); setOpen(false); }} title="Form">
          <input className="border p-2" placeholder="Name" />
        </FormDialog>
      </>
    );
  },
};
