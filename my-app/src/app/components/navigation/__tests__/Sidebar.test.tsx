import { render } from '@testing-library/react';
import { Sidebar } from '../Sidebar';

describe('Sidebar', () => {
  it('renders children', () => {
    const { getByText } = render(<Sidebar>Child</Sidebar>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
