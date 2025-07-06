import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SessionExpiredModal } from '@app/components/modals/SessionExpiredModal';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof SessionExpiredModal> = {
  title: 'modals/SessionExpiredModal',
  component: SessionExpiredModal,
};
export default meta;

export const Primary: StoryObj<typeof SessionExpiredModal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <SessionExpiredModal isOpen={open} onClose={() => setOpen(false)} onRedirect={() => setOpen(false)} />
      </>
    );
  },
};
