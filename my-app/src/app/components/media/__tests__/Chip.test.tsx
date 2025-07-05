import { render } from '@testing-library/react';
import { Chip } from '../Chip';

describe('Chip', () => {
  it('renders children', () => {
    const { getByText } = render(<Chip>Child</Chip>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
