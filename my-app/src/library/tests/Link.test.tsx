import { render } from '@testing-library/react';
import { Link } from '../components/typography/Link';

describe('Link', () => {
  it('renders anchor tag with href', () => {
    const { getByText } = render(<Link href="/home">Home</Link>);
    const anchor = getByText('Home');
    expect(anchor.tagName.toLowerCase()).toBe('a');
    expect(anchor).toHaveAttribute('href', '/home');
  });

  it('handles external links', () => {
    const { getByText } = render(
      <Link href="https://example.com" external>
        External
      </Link>
    );
    const anchor = getByText('External');
    expect(anchor).toHaveAttribute('target', '_blank');
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
