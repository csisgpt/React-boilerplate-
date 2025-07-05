import { render } from '@testing-library/react';
import { Tile } from '../Tile';

describe('Tile', () => {
  it('renders children', () => {
    const { getByText } = render(<Tile>Child</Tile>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
