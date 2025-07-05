import { render } from '@testing-library/react';
import { FloatingActionButton } from '../FloatingActionButton';

describe('FloatingActionButton', () => {
  it('renders children', () => {
    const { getByText } = render(<FloatingActionButton>Child</FloatingActionButton>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
