import { render } from '@testing-library/react';
import { Stack } from '../Stack';

describe('Stack', () => {
  it('renders vertical stack', () => {
    const { container } = render(<Stack gap="1">Item</Stack>);
    const el = container.firstElementChild as HTMLElement;
    expect(el).toHaveClass('flex', 'flex-col', 'gap-1');
  });
});
