import { render } from '@testing-library/react';
import { CodeBlock } from '@app/components/typography/CodeBlock';

it('renders code element', () => {
  const { container } = render(<CodeBlock>const a = 1;</CodeBlock>);
  const code = container.querySelector('code');
  expect(code).toBeInTheDocument();
});
