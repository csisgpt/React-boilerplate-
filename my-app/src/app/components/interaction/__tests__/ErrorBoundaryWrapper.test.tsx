import { render } from '@testing-library/react';
import { ErrorBoundaryWrapper } from '../ErrorBoundaryWrapper';

describe('ErrorBoundaryWrapper', () => {
  it('renders children', () => {
    const { getByText } = render(<ErrorBoundaryWrapper>Child</ErrorBoundaryWrapper>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
