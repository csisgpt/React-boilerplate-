import { render } from '@testing-library/react';
import { Center } from '../Center';

describe('Center', () => {
  it('centers content', () => {
    const { container } = render(<Center>Text</Center>);
    const el = container.firstElementChild as HTMLElement;
    expect(el).toHaveClass('flex', 'items-center', 'justify-center');
  });
});
