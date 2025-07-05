import { render } from '@testing-library/react';
import { Select } from '../Select';

describe('Select', () => {
  it('renders children', () => {
    const { getByText } = render(<Select>Child</Select>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
