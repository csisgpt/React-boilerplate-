import { render, fireEvent } from '@testing-library/react';
import { Rating } from '../components/inputs/Rating';

describe('Rating', () => {
  it('changes on hover and select', () => {
    const { getAllByRole } = render(<Rating max={3} />);
    const stars = getAllByRole('radio');
    fireEvent.mouseEnter(stars[1]);
    expect(stars[1]).toHaveClass('text-yellow-400');
    fireEvent.click(stars[1]);
    expect(stars[1]).toHaveAttribute('aria-checked', 'true');
  });

  it('readOnly prevents changes', () => {
    const { getAllByRole } = render(<Rating max={2} readOnly defaultValue={1} />);
    const stars = getAllByRole('radio');
    fireEvent.click(stars[1]);
    expect(stars[1]).toHaveAttribute('aria-checked', 'false');
  });
});
