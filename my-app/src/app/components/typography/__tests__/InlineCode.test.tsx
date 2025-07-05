import { render } from '@testing-library/react';
import { InlineCode } from '../InlineCode';

describe('InlineCode', () => {
  it('renders children', () => {
    const { getByText } = render(<InlineCode>Child</InlineCode>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
