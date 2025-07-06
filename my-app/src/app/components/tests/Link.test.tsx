import { render } from '@testing-library/react';
import { Link } from '@app/components/typography/Link';

it('adds target blank when external', () => {
  const { getByRole } = render(
    <Link href="https://example.com" external>
      A
    </Link>
  );
  const a = getByRole('link');
  expect(a.getAttribute('target')).toBe('_blank');
});
