import { render } from '@testing-library/react';
import { Text } from '@app/components/typography/Text';

it('renders with custom tag', () => {
  const { container } = render(
    <Text as="span" className="test" />
  );
  const span = container.querySelector('span');
  expect(span).toBeInTheDocument();
});
