import { render } from '@testing-library/react';
import { Menu } from '@app/components/navigation/Menu';

describe('Menu', () => {
  it('renders items', () => {
    const { getByText } = render(
      <Menu items={[{ label: 'A' }, { label: 'B' }]} />
    );
    expect(getByText('A')).toBeInTheDocument();
    expect(getByText('B')).toBeInTheDocument();
  });
});
