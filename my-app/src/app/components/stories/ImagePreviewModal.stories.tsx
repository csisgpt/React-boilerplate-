import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ImagePreviewModal } from '@app/components/modals/ImagePreviewModal';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof ImagePreviewModal> = {
  title: 'modals/ImagePreviewModal',
  component: ImagePreviewModal,
};
export default meta;

export const Primary: StoryObj<typeof ImagePreviewModal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <ImagePreviewModal isOpen={open} onClose={() => setOpen(false)} src="https://via.placeholder.com/300" title="Image" />
      </>
    );
  },
};
