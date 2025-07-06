import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '@app/components/theme';

const TestComp = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} data-theme={theme}>
      toggle
    </button>
  );
};

test('toggles theme', () => {
  const { getByText } = render(
    <ThemeProvider>
      <TestComp />
    </ThemeProvider>
  );
  const btn = getByText('toggle');
  expect(btn.getAttribute('data-theme')).toBe('light');
  fireEvent.click(btn);
  expect(btn.getAttribute('data-theme')).toBe('dark');
});
