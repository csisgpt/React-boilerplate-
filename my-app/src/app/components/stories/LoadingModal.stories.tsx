import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { LoadingModal } from '@app/components/modals/LoadingModal';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof LoadingModal> = {
  title: 'modals/LoadingModal',
  component: LoadingModal,
};
export default meta;

export const Primary: StoryObj<typeof LoadingModal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <LoadingModal isOpen={open} onClose={() => setOpen(false)} title="Loading" />
      </>
    );
  },
};
