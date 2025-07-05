import { render } from '@testing-library/react';
import { SuspenseFallback } from '../SuspenseFallback';

describe('SuspenseFallback', () => {
  it('renders children', () => {
    const { getByText } = render(<SuspenseFallback>Child</SuspenseFallback>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
