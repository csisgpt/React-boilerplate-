import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FullscreenModal } from '@app/components/modals/FullscreenModal';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof FullscreenModal> = {
  title: 'modals/FullscreenModal',
  component: FullscreenModal,
};
export default meta;

export const Primary: StoryObj<typeof FullscreenModal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <FullscreenModal isOpen={open} onClose={() => setOpen(false)} title="Full Screen">
          Content
        </FullscreenModal>
      </>
    );
  },
};
