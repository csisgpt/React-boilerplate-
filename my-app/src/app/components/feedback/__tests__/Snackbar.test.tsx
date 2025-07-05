import { render } from '@testing-library/react';
import { Snackbar } from '../Snackbar';

describe('Snackbar', () => {
  it('renders children', () => {
    const { getByText } = render(<Snackbar>Child</Snackbar>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
