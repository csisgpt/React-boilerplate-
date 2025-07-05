import { render } from '@testing-library/react';
import { CopyToClipboard } from '../CopyToClipboard';

describe('CopyToClipboard', () => {
  it('renders children', () => {
    const { getByText } = render(<CopyToClipboard>Child</CopyToClipboard>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
