import { render } from '@testing-library/react';
import { Footer } from '@app/components/layout/Footer';

describe('Layout Footer', () => {
  it('renders slot', () => {
    const { getByText } = render(<Footer>F</Footer>);
    expect(getByText('F')).toBeInTheDocument();
  });
});
