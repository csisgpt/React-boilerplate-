import { render } from '@testing-library/react';
import { Navbar } from '@app/components/navigation/Navbar';

describe('Navbar', () => {
  it('renders items', () => {
    const { getByText } = render(
      <Navbar items={[{ label: 'Home', href: '/' }]} />
    );
    expect(getByText('Home')).toBeInTheDocument();
  });
});
