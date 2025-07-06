import { render } from '@testing-library/react';
import { Autocomplete } from '../Autocomplete';

describe('Autocomplete', () => {
  it('renders label', () => {
    const { getByText } = render(
      <Autocomplete name="auto" label="Label" options={[{ label: 'A', value: 'a' }]} />,
    );
    expect(getByText('Label')).toBeInTheDocument();
  });
});
