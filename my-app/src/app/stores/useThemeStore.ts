import create from 'zustand';
import { withDevtools, withPersist, withCombine } from '@app/stores/storeConfig';
import type { ThemeState } from '@app/stores/types';

const initialState: Omit<ThemeState, 'toggleTheme'> = {
  theme: 'light',
};

function applyTheme(theme: 'light' | 'dark') {
  const html = document.documentElement;
  html.classList.remove('light', 'dark');
  html.classList.add(theme);
}

/** Theme store controlling light/dark mode */
export const useThemeStore = create<ThemeState>()(
  withDevtools(
    withPersist('theme')(
      withCombine(initialState, (set, get) => ({
        toggleTheme() {
          const next = get().theme === 'light' ? 'dark' : 'light';
          set({ theme: next });
          applyTheme(next);
        },
      }))
    )
  )
);

export const themeInitialState = initialState;
