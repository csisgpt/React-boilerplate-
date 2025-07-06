import { render } from '@testing-library/react';
import { Select } from '../Select';

describe('Select', () => {
  it('renders label', () => {
    const { getByText } = render(
      <Select name="sel" label="Label" options={[{ label: 'A', value: 'a' }]} />,
    );
    expect(getByText('Label')).toBeInTheDocument();
  });
});
