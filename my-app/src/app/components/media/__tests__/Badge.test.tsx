import { render } from '@testing-library/react';
import { Badge } from '../Badge';

describe('Badge', () => {
  it('renders children', () => {
    const { getByText } = render(<Badge>Child</Badge>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
