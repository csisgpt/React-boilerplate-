import { render } from '@testing-library/react';
import { VirtualList } from '../VirtualList';

describe('VirtualList', () => {
  it('renders children', () => {
    const { getByText } = render(<VirtualList>Child</VirtualList>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
