import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ErrorModal } from '@app/components/modals/ErrorModal';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof ErrorModal> = {
  title: 'modals/ErrorModal',
  component: ErrorModal,
};
export default meta;

export const Primary: StoryObj<typeof ErrorModal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <ErrorModal isOpen={open} onClose={() => setOpen(false)} message="Error" title="Error" />
      </>
    );
  },
};
