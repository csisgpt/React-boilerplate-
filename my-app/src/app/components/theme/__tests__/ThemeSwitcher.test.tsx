import { render } from '@testing-library/react';
import { ThemeSwitcher } from '../ThemeSwitcher';

describe('ThemeSwitcher', () => {
  it('renders children', () => {
    const { getByText } = render(<ThemeSwitcher>Child</ThemeSwitcher>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
