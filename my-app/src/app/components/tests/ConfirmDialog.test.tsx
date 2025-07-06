import { render, fireEvent } from '@testing-library/react';
import { ConfirmDialog } from '@app/components/modals/ConfirmDialog';

describe('ConfirmDialog', () => {
  it('calls onConfirm when confirm clicked', () => {
    const onConfirm = jest.fn();
    const onClose = jest.fn();
    const { getByText } = render(
      <ConfirmDialog isOpen onClose={onClose} onConfirm={onConfirm} title="Confirm" />
    );
    fireEvent.click(getByText('Confirm'));
    expect(onConfirm).toHaveBeenCalled();
  });
});
