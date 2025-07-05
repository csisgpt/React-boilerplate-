import { render } from '@testing-library/react';
import { Stack } from '../Stack';

describe('Stack', () => {
  it('renders children', () => {
    const { getByText } = render(<Stack>Child</Stack>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
