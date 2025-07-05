import { render } from '@testing-library/react';
import { Autocomplete } from '../Autocomplete';

describe('Autocomplete', () => {
  it('renders children', () => {
    const { getByText } = render(<Autocomplete>Child</Autocomplete>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
