import { render } from '@testing-library/react';
import { ImagePreviewModal } from '@app/components/modals/ImagePreviewModal';

describe('ImagePreviewModal', () => {
  it('renders image', () => {
    const { getByRole } = render(
      <ImagePreviewModal isOpen onClose={() => {}} src="img.png" title="Image" />
    );
    expect(getByRole('img')).toBeInTheDocument();
  });
});
