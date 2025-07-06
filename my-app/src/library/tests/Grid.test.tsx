import { render } from '@testing-library/react';
import { Grid } from '../components/primitives/Grid';

describe('Grid', () => {
  it('renders grid display', () => {
    const { container } = render(<Grid gap={{ md: '4' }}>Grid</Grid>);
    const el = container.firstElementChild as HTMLElement;
    expect(el).toHaveClass('grid', 'md:gap-4');
  });
});
