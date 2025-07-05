import create from 'zustand';
import { withDevtools, withCombine } from '@app/stores/storeConfig';
import type { LoadingState } from '@app/stores/types';

const initialState: Omit<LoadingState, 'startLoading' | 'stopLoading' | 'isLoading'> = {
  loadingKeys: [],
};

/** Global loading tracker */
export const useLoadingStore = create<LoadingState>()(
  withDevtools(
    withCombine(initialState, (set, get) => ({
      startLoading(key) {
        set((s) => ({ loadingKeys: [...s.loadingKeys, key] }));
      },
      stopLoading(key) {
        set((s) => ({ loadingKeys: s.loadingKeys.filter((k) => k !== key) }));
      },
      isLoading(key) {
        const keys = get().loadingKeys;
        return key ? keys.includes(key) : keys.length > 0;
      },
    }))
  )
);

export const loadingInitialState = initialState;
