import { render } from '@testing-library/react';
import { PermissionModal } from '@app/components/modals/PermissionModal';

describe('PermissionModal', () => {
  it('renders message', () => {
    const { getByText } = render(
      <PermissionModal isOpen onClose={() => {}} message="Denied" />
    );
    expect(getByText('Denied')).toBeInTheDocument();
  });
});
