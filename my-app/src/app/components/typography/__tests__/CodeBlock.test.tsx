import { render } from '@testing-library/react';
import { CodeBlock } from '../CodeBlock';

describe('CodeBlock', () => {
  it('renders children', () => {
    const { getByText } = render(<CodeBlock>Child</CodeBlock>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
