import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '@app/components/modals/Modal';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof Modal> = {
  title: 'modals/Modal',
  component: Modal,
};
export default meta;

export const Primary: StoryObj<typeof Modal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <Modal isOpen={open} onClose={() => setOpen(false)} title="Modal">
          Content
        </Modal>
      </>
    );
  },
};
