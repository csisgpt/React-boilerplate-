import { render } from '@testing-library/react';
import { Flex } from '../components/primitives/Flex';

describe('Flex', () => {
  it('renders flex display and custom class', () => {
    const { container } = render(
      <Flex className="custom" gap="2">Item</Flex>
    );
    const el = container.firstElementChild as HTMLElement;
    expect(el).toHaveClass('flex', 'gap-2', 'custom');
  });
});
