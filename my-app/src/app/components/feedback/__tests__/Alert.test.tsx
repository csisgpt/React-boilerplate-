import { render } from '@testing-library/react';
import { Alert } from '../Alert';

describe('Alert', () => {
  it('renders children', () => {
    const { getByText } = render(<Alert>Child</Alert>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
