import { render } from '@testing-library/react';
import { GlobalStyles } from '../GlobalStyles';

describe('GlobalStyles', () => {
  it('injects style tag', () => {
    const { container } = render(<GlobalStyles />);
    const style = container.querySelector('style');
    expect(style).toBeInTheDocument();
  });
});
