import { render } from '@testing-library/react';
import { VideoModal } from '@app/components/modals/VideoModal';

describe('VideoModal', () => {
  it('renders video', () => {
    const { container } = render(
      <VideoModal isOpen onClose={() => {}} src="video.mp4" title="Video" />
    );
    expect(container.querySelector('video')).toBeInTheDocument();
  });
});
