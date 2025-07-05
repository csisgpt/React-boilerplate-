import { render } from '@testing-library/react';
import { Box } from '../Box';

describe('Box', () => {
  it('renders children', () => {
    const { getByText } = render(<Box>Child</Box>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
