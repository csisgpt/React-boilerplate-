import { render, fireEvent } from '@testing-library/react';
import { AlertDialog } from '@app/components/modals/AlertDialog';

describe('AlertDialog', () => {
  it('calls onClose when confirm clicked', () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <AlertDialog isOpen onClose={onClose} title="Alert" />
    );
    fireEvent.click(getByText('OK'));
    expect(onClose).toHaveBeenCalled();
  });
});
