import { render } from '@testing-library/react';
import { Heading } from '@app/components/typography/Heading';

it('renders correct heading level', () => {
  const { container } = render(<Heading level={3}>Hi</Heading>);
  const h3 = container.querySelector('h3');
  expect(h3).toBeInTheDocument();
});
