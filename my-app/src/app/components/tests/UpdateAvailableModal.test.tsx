import { render, fireEvent } from '@testing-library/react';
import { UpdateAvailableModal } from '@app/components/modals/UpdateAvailableModal';

describe('UpdateAvailableModal', () => {
  it('calls onUpdate', () => {
    const onUpdate = jest.fn();
    const { getByText } = render(
      <UpdateAvailableModal isOpen onClose={() => {}} onUpdate={onUpdate} />
    );
    fireEvent.click(getByText('Update'));
    expect(onUpdate).toHaveBeenCalled();
  });
});
