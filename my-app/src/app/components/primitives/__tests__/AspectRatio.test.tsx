import { render } from '@testing-library/react';
import { AspectRatio } from '../AspectRatio';

describe('AspectRatio', () => {
  it('renders children', () => {
    const { getByText } = render(<AspectRatio>Child</AspectRatio>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
