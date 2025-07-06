import { render } from '@testing-library/react';
import { Footer } from '@app/components/navigation/Footer';

describe('Navigation Footer', () => {
  it('renders children', () => {
    const { getByText } = render(<Footer>copyright</Footer>);
    expect(getByText('copyright')).toBeInTheDocument();
  });
});
