import { render } from '@testing-library/react';
import { AvatarGroup } from '../AvatarGroup';

describe('AvatarGroup', () => {
  it('renders children', () => {
    const { getByText } = render(<AvatarGroup>Child</AvatarGroup>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
