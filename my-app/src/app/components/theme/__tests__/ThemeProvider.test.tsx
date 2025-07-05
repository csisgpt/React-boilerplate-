import { render } from '@testing-library/react';
import { ThemeProvider } from '../ThemeProvider';

describe('ThemeProvider', () => {
  it('renders children', () => {
    const { getByText } = render(<ThemeProvider>Child</ThemeProvider>);
    expect(getByText('Child')).toBeInTheDocument();
  });
});
