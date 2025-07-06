import { render } from '@testing-library/react';
import { Paragraph } from '../components/typography/Paragraph';

describe('Paragraph', () => {
  it('renders p tag', () => {
    const { container } = render(<Paragraph>para</Paragraph>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('applies classes', () => {
    const { container } = render(
      <Paragraph size="sm" weight="semibold" truncate ellipsisLines={1} className="c" />
    );
    const el = container.querySelector('p') as HTMLElement;
    expect(el.className).toContain('text-sm');
    expect(el.className).toContain('font-semibold');
    expect(el.className).toContain('truncate');
    expect(el.className).toContain('line-clamp-1');
    expect(el.className).toContain('c');
  });
});
