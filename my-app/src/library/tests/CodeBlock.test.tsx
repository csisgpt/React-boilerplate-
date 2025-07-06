import { render } from '@testing-library/react';
import { CodeBlock } from '../components/typography/CodeBlock';

describe('CodeBlock', () => {
  it('renders pre and code tags', () => {
    const { container } = render(<CodeBlock>code</CodeBlock>);
    expect(container.querySelector('pre')).toBeInTheDocument();
    expect(container.querySelector('pre code')).toBeInTheDocument();
  });

  it('applies classes', () => {
    const { container } = render(
      <CodeBlock size="lg" weight="bold" truncate ellipsisLines={4} className="x">
        code
      </CodeBlock>
    );
    const pre = container.querySelector('pre') as HTMLElement;
    expect(pre.className).toContain('text-lg');
    expect(pre.className).toContain('font-bold');
    expect(pre.className).toContain('truncate');
    expect(pre.className).toContain('line-clamp-4');
    expect(pre.className).toContain('x');
  });
});
