import { render } from '@testing-library/react';
import { LazyImage } from '../LazyImage';

describe('LazyImage', () => {
  it('renders children', () => {
    const { getByText } = render(<LazyImage>Child</LazyImage>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
