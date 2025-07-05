import { render } from '@testing-library/react';
import { NotificationCenter } from '../NotificationCenter';

describe('NotificationCenter', () => {
  it('renders children', () => {
    const { getByText } = render(<NotificationCenter>Child</NotificationCenter>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
