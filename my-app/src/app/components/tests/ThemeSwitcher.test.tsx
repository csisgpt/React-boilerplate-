import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '@app/components/theme/ThemeProvider';
import { ThemeSwitcher } from '@app/components/theme/ThemeSwitcher';

it('switches theme on click', () => {
  const { getByRole } = render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
  const btn = getByRole('button');
  expect(document.documentElement.classList.contains('light')).toBe(true);
  fireEvent.click(btn);
  expect(document.documentElement.classList.contains('dark')).toBe(true);
});
