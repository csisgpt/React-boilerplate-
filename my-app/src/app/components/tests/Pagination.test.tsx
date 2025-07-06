import { render, fireEvent } from '@testing-library/react';
import { Pagination } from '@app/components/navigation/Pagination';

describe('Pagination', () => {
  it('calls onChange when page clicked', () => {
    const handle = jest.fn();
    const { getByText } = render(<Pagination page={1} total={3} onChange={handle} />);
    fireEvent.click(getByText('2'));
    expect(handle).toHaveBeenCalledWith(2);
  });
});
