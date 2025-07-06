import { render, fireEvent } from '@testing-library/react';
import { ToggleSwitch } from '../components/inputs/ToggleSwitch';

describe('ToggleSwitch', () => {
  it('toggles on click', () => {
    const { getByRole } = render(<ToggleSwitch name="t" />);
    const toggle = getByRole('switch');
    expect(toggle).toHaveAttribute('aria-checked', 'false');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'true');
  });
});
