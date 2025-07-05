import { render } from '@testing-library/react';
import { ProgressBar } from '../ProgressBar';

describe('ProgressBar', () => {
  it('renders children', () => {
    const { getByText } = render(<ProgressBar>Child</ProgressBar>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
