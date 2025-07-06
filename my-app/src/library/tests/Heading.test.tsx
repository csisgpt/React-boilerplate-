import { render } from '@testing-library/react';
import { Heading } from '../components/typography/Heading';

describe('Heading', () => {
  it('renders correct heading level', () => {
    const { container } = render(<Heading level={2}>content</Heading>);
    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('applies classes', () => {
    const { container } = render(
      <Heading level={3} size="lg" weight="bold" truncate ellipsisLines={3} className="ex">
        content
      </Heading>
    );
    const el = container.querySelector('h3') as HTMLElement;
    expect(el.className).toContain('text-lg');
    expect(el.className).toContain('font-bold');
    expect(el.className).toContain('truncate');
    expect(el.className).toContain('line-clamp-3');
    expect(el.className).toContain('ex');
  });
});
