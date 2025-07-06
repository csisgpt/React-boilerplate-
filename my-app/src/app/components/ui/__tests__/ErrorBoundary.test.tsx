import { render } from '@testing-library/react';
import { ErrorBoundary } from '../ErrorBoundary';

describe('ErrorBoundary', () => {
  it('renders fallback on error', () => {
    const Thrower = () => { throw new Error('err'); };
    const { getByText } = render(
      <ErrorBoundary fallback={<span>error</span>}>
        <Thrower />
      </ErrorBoundary>
    );
    expect(getByText('error')).toBeInTheDocument();
  });
});
