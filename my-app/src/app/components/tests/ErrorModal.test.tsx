import { render } from '@testing-library/react';
import { ErrorModal } from '@app/components/modals/ErrorModal';

describe('ErrorModal', () => {
  it('renders message', () => {
    const { getByText } = render(
      <ErrorModal isOpen onClose={() => {}} message="Error" title="Error" />
    );
    expect(getByText('Error')).toBeInTheDocument();
  });
});
