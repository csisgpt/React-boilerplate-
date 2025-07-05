import { render } from '@testing-library/react';
import { Image } from '../Image';

describe('Image', () => {
  it('renders children', () => {
    const { getByText } = render(<Image>Child</Image>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
