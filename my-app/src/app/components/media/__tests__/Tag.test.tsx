import { render } from '@testing-library/react';
import { Tag } from '../Tag';

describe('Tag', () => {
  it('renders children', () => {
    const { getByText } = render(<Tag>Child</Tag>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
