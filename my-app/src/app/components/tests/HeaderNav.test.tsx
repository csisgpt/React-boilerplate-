import { render } from '@testing-library/react';
import { Header } from '@app/components/navigation/Header';

describe('Navigation Header', () => {
  it('renders children', () => {
    const { getByText } = render(<Header>title</Header>);
    expect(getByText('title')).toBeInTheDocument();
  });
});
