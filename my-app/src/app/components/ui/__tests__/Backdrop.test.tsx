import { render, fireEvent } from '@testing-library/react';
import { Backdrop } from '../Backdrop';

describe('Backdrop', () => {
  it('handles click', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Backdrop onClick={onClick} />);
    fireEvent.click(getByRole('presentation'));
    expect(onClick).toHaveBeenCalled();
  });
});
