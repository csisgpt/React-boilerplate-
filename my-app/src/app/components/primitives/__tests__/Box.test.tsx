import { render } from '@testing-library/react';
import { Box } from '../Box';

describe('Box', () => {
  it('applies responsive classes and custom element', () => {
    const { container } = render(
      <Box as="section" w="full" p={{ sm: '2', md: '4' }} data-testid="box">Box</Box>
    );
    const el = container.querySelector('section') as HTMLElement;
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('w-full', 'sm:p-2', 'md:p-4');
  });
});
