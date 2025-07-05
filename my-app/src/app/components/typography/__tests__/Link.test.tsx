import { render } from '@testing-library/react';
import { Link } from '../Link';

describe('Link', () => {
  it('renders children', () => {
    const { getByText } = render(<Link>Child</Link>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
