import { render } from '@testing-library/react';
import { VirtualScroller } from '../VirtualScroller';

describe('VirtualScroller', () => {
  it('renders children', () => {
    const { getByText } = render(<VirtualScroller>Child</VirtualScroller>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
