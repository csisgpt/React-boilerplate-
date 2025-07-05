import { render } from '@testing-library/react';
import { BackToTop } from '../BackToTop';

describe('BackToTop', () => {
  it('renders children', () => {
    const { getByText } = render(<BackToTop>Child</BackToTop>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
