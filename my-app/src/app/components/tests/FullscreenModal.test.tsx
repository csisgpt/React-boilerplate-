import { render } from '@testing-library/react';
import { FullscreenModal } from '@app/components/modals/FullscreenModal';

describe('FullscreenModal', () => {
  it('renders when open', () => {
    const { getByRole } = render(
      <FullscreenModal isOpen onClose={() => {}}>Content</FullscreenModal>
    );
    expect(getByRole('dialog')).toBeInTheDocument();
  });
});
