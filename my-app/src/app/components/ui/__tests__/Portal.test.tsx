import { render } from '@testing-library/react';
import { Portal } from '../Portal';

describe('Portal', () => {
  it('renders children into body', () => {
    const { getByText } = render(<Portal>content</Portal>);
    expect(getByText('content')).toBeInTheDocument();
  });
});
