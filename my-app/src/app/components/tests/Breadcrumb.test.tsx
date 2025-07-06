import { render } from '@testing-library/react';
import { Breadcrumb } from '@app/components/navigation/Breadcrumb';

describe('Breadcrumb', () => {
  it('renders provided items', () => {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Page' },
    ];
    const { getByText } = render(<Breadcrumb items={items} />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('Page')).toBeInTheDocument();
  });
});
