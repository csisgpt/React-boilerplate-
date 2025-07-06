import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { UpdateAvailableModal } from '@app/components/modals/UpdateAvailableModal';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof UpdateAvailableModal> = {
  title: 'modals/UpdateAvailableModal',
  component: UpdateAvailableModal,
};
export default meta;

export const Primary: StoryObj<typeof UpdateAvailableModal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <UpdateAvailableModal isOpen={open} onClose={() => setOpen(false)} onUpdate={() => setOpen(false)} />
      </>
    );
  },
};
