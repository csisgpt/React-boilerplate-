import { render } from '@testing-library/react';
import { Banner } from '../Banner';

describe('Banner', () => {
  it('renders children', () => {
    const { getByText } = render(<Banner>Child</Banner>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
