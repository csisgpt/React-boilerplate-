import { render } from '@testing-library/react';
import { ToggleSwitch } from '../ToggleSwitch';

describe('ToggleSwitch', () => {
  it('renders children', () => {
    const { getByText } = render(<ToggleSwitch>Child</ToggleSwitch>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
