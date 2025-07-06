import { render } from '@testing-library/react';
import { Tile } from '../Tile';

describe('Tile', () => {
  it('applies clickable class', () => {
    const { container } = render(<Tile clickable>Tile</Tile>);
    expect(container.firstChild).toHaveClass('cursor-pointer');
  });
});
