import create from 'zustand';
import { withDevtools, withPersist, withCombine } from '@app/stores/storeConfig';
import type { LocalizationState } from '@app/stores/types';

const initialState: Omit<LocalizationState, 'setLanguage'> = {
  language: 'en',
  available: ['en'],
};

/** Localization store */
export const useLocalizationStore = create<LocalizationState>()(
  withDevtools(
    withPersist('locale')(
      withCombine(initialState, (set) => ({
        setLanguage(lang) {
          set({ language: lang });
        },
      }))
    )
  )
);

export const localizationInitialState = initialState;
