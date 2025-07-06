import { render } from '@testing-library/react';
import { RadioGroup } from '../RadioGroup';

describe('RadioGroup', () => {
  it('renders label', () => {
    const { getByText } = render(
      <RadioGroup name="radio" label="Label" options={[{ label: 'A', value: 'a' }]} />,
    );
    expect(getByText('Label')).toBeInTheDocument();
  });
});
