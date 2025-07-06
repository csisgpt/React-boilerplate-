import { render } from '@testing-library/react';
import { InlineCode } from '@app/components/typography/InlineCode';

it('renders inline code', () => {
  const { container } = render(<InlineCode>a</InlineCode>);
  const code = container.querySelector('code');
  expect(code).toBeInTheDocument();
});
