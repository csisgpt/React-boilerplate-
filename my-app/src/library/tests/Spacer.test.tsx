import { render } from '@testing-library/react';
import { Spacer } from '../components/primitives/Spacer';

describe('Spacer', () => {
  it('renders grow class', () => {
    const { container } = render(<Spacer data-testid="spacer" />);
    const el = container.querySelector('div') as HTMLElement;
    expect(el).toHaveClass('grow');
  });
});
