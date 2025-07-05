import { render } from '@testing-library/react';
import { Avatar } from '../Avatar';

describe('Avatar', () => {
  it('renders children', () => {
    const { getByText } = render(<Avatar>Child</Avatar>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
