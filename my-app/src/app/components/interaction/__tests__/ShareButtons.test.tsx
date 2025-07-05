import { render } from '@testing-library/react';
import { ShareButtons } from '../ShareButtons';

describe('ShareButtons', () => {
  it('renders children', () => {
    const { getByText } = render(<ShareButtons>Child</ShareButtons>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
