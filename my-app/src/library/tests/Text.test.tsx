import { render } from '@testing-library/react';
import { Text } from '../components/typography/Text';

describe('Text', () => {
  it('renders p tag', () => {
    const { container } = render(<Text>content</Text>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('applies classes', () => {
    const { container } = render(
      <Text size="lg" weight="bold" truncate ellipsisLines={2} className="extra">
        content
      </Text>
    );
    const el = container.querySelector('p') as HTMLElement;
    expect(el.className).toContain('text-lg');
    expect(el.className).toContain('font-bold');
    expect(el.className).toContain('truncate');
    expect(el.className).toContain('line-clamp-2');
    expect(el.className).toContain('extra');
  });
});
