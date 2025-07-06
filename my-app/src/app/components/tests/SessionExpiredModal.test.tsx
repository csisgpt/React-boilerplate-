import { render, fireEvent } from '@testing-library/react';
import { SessionExpiredModal } from '@app/components/modals/SessionExpiredModal';

describe('SessionExpiredModal', () => {
  it('calls redirect', () => {
    const onRedirect = jest.fn();
    const { getByText } = render(
      <SessionExpiredModal isOpen onClose={() => {}} onRedirect={onRedirect} />
    );
    fireEvent.click(getByText('Login'));
    expect(onRedirect).toHaveBeenCalled();
  });
});
