import { render } from '@testing-library/react';
import { Header } from '@app/components/layout/Header';

describe('Layout Header', () => {
  it('renders slot', () => {
    const { getByText } = render(<Header>H</Header>);
    expect(getByText('H')).toBeInTheDocument();
  });
});
