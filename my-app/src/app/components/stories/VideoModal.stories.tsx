import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { VideoModal } from '@app/components/modals/VideoModal';
import { Button } from '@app/components/ui/Button';

const meta: Meta<typeof VideoModal> = {
  title: 'modals/VideoModal',
  component: VideoModal,
};
export default meta;

export const Primary: StoryObj<typeof VideoModal> = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open</Button>
        <VideoModal isOpen={open} onClose={() => setOpen(false)} src="movie.mp4" title="Video" />
      </>
    );
  },
};
