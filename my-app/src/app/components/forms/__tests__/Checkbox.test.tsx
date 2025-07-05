import { render } from '@testing-library/react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
  it('renders children', () => {
    const { getByText } = render(<Checkbox>Child</Checkbox>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
