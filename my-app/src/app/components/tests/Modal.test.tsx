import { render, fireEvent } from '@testing-library/react';
import { Modal } from '@app/components/modals/Modal';

describe('Modal', () => {
  it('renders when open', () => {
    const { getByRole } = render(
      <Modal isOpen onClose={() => {}}>Content</Modal>
    );
    expect(getByRole('dialog')).toBeInTheDocument();
  });

  it('calls onClose on escape key', () => {
    const onClose = jest.fn();
    render(<Modal isOpen onClose={onClose}>Content</Modal>);
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });
});
