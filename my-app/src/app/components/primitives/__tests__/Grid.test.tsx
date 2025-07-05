import { render } from '@testing-library/react';
import { Grid } from '../Grid';

describe('Grid', () => {
  it('renders children', () => {
    const { getByText } = render(<Grid>Child</Grid>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
