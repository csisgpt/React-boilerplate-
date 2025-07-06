import { fireEvent, render } from '@testing-library/react';
import { Rating } from '../components/inputs/Rating';

describe('Rating', () => {
  it('changes highlight on hover', () => {
    const { getAllByRole } = render(<Rating onChange={() => {}} />);
    const stars = getAllByRole('radio');
    fireEvent.mouseEnter(stars[2]);
    expect(stars[2].querySelector('svg')?.getAttribute('fill')).toBe('currentColor');
  });

  it('selects on click', () => {
    const handle = jest.fn();
    const { getAllByRole } = render(<Rating onChange={handle} />);
    const stars = getAllByRole('radio');
    fireEvent.click(stars[3]);
    expect(handle).toHaveBeenCalledWith(4);
  });

  it('does not change when readOnly', () => {
    const handle = jest.fn();
    const { getAllByRole } = render(<Rating readOnly onChange={handle} />);
    const stars = getAllByRole('radio');
    fireEvent.click(stars[4]);
    expect(handle).not.toHaveBeenCalled();
  });
});
