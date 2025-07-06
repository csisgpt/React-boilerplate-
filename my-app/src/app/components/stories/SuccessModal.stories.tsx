import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SuccessModal } from '@app/components/modals/SuccessModal';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof SuccessModal> = {
  title: 'modals/SuccessModal',
  component: SuccessModal,
};
export default meta;

export const Primary: StoryObj<typeof SuccessModal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <SuccessModal isOpen={open} onClose={() => setOpen(false)} message="Success" title="Success" />
      </>
    );
  },
};
