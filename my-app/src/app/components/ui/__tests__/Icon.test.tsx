import { render } from '@testing-library/react';
import { Icon } from '../Icon';

describe('Icon', () => {
  it('renders svg image', () => {
    const { container } = render(<Icon name="check" />);
    const img = container.querySelector('img');
    expect(img).toBeInTheDocument();
  });
});
