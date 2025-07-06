import { render } from '@testing-library/react';
import { SuccessModal } from '@app/components/modals/SuccessModal';

describe('SuccessModal', () => {
  it('renders message', () => {
    const { getByText } = render(
      <SuccessModal isOpen onClose={() => {}} message="Success" title="Success" />
    );
    expect(getByText('Success')).toBeInTheDocument();
  });
});
