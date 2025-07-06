import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { PermissionModal } from '@app/components/modals/PermissionModal';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof PermissionModal> = {
  title: 'modals/PermissionModal',
  component: PermissionModal,
};
export default meta;

export const Primary: StoryObj<typeof PermissionModal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <PermissionModal isOpen={open} onClose={() => setOpen(false)} message="Permission denied" />
      </>
    );
  },
};
