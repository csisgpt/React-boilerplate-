import { render } from '@testing-library/react';
import { Container } from '../components/primitives/Container';

describe('Container', () => {
  it('renders container class', () => {
    const { container } = render(<Container>Content</Container>);
    const el = container.firstElementChild as HTMLElement;
    expect(el).toHaveClass('container');
  });
});
