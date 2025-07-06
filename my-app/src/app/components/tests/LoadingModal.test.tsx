import { render } from '@testing-library/react';
import { LoadingModal } from '@app/components/modals/LoadingModal';

describe('LoadingModal', () => {
  it('shows spinner', () => {
    const { container } = render(
      <LoadingModal isOpen onClose={() => {}} title="Loading" />
    );
    expect(container.querySelector('div.animate-spin')).toBeInTheDocument();
  });
});
