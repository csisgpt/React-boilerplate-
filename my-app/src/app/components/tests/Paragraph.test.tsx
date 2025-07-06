import { render } from '@testing-library/react';
import { Paragraph } from '@app/components/typography/Paragraph';

it('applies leading class', () => {
  const { getByText } = render(<Paragraph leading="tight">Hello</Paragraph>);
  const p = getByText('Hello');
  expect(p.className).toContain('leading-tight');
});
