import { render } from '@testing-library/react';
import { ToggleSwitch } from '../ToggleSwitch';

describe('ToggleSwitch', () => {
  it('renders label', () => {
    const { getByText } = render(
      <ToggleSwitch name="toggle" label="Label" />,
    );
    expect(getByText('Label')).toBeInTheDocument();
  });
});
