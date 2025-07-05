import { render } from '@testing-library/react';
import { Tabs } from '../Tabs';

describe('Tabs', () => {
  it('renders children', () => {
    const { getByText } = render(<Tabs>Child</Tabs>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
