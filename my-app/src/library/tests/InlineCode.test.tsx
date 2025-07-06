import { render } from '@testing-library/react';
import { InlineCode } from '../components/typography/InlineCode';

describe('InlineCode', () => {
  it('renders code tag', () => {
    const { container } = render(<InlineCode>inline</InlineCode>);
    expect(container.querySelector('code')).toBeInTheDocument();
  });

  it('applies classes', () => {
    const { container } = render(
      <InlineCode size="sm" weight="semibold" truncate ellipsisLines={2} className="c">
        inline
      </InlineCode>
    );
    const code = container.querySelector('code') as HTMLElement;
    expect(code.className).toContain('text-sm');
    expect(code.className).toContain('font-semibold');
    expect(code.className).toContain('truncate');
    expect(code.className).toContain('line-clamp-2');
    expect(code.className).toContain('c');
  });
});
