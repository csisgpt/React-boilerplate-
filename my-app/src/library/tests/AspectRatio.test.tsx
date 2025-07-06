import { render } from '@testing-library/react';
import { AspectRatio } from '../components/primitives/AspectRatio';

describe('AspectRatio', () => {
  it('applies aspect ratio class', () => {
    const { container } = render(<AspectRatio ratio="16/9" />);
    const el = container.firstElementChild as HTMLElement;
    expect(el).toHaveClass('aspect-[16/9]');
  });
});
