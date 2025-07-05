import create from 'zustand';
import { withDevtools, withPersist, withCombine } from '@app/stores/storeConfig';
import type { UiState } from '@app/stores/types';

const initialState: Omit<UiState, 'toggleSidebar' | 'setLanguage'> = {
  sidebarOpen: false,
  language: 'en',
};

/** UI preferences store */
export const useUiStore = create<UiState>()(
  withDevtools(
    withPersist('ui')(
      withCombine(initialState, (set) => ({
        toggleSidebar() {
          set((s) => ({ sidebarOpen: !s.sidebarOpen }));
        },
        setLanguage(lang) {
          set({ language: lang });
        },
      }))
    )
  )
);

export const uiInitialState = initialState;
