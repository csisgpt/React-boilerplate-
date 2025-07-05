import create from 'zustand';
import { withDevtools, withPersist, withCombine } from '@app/stores/storeConfig';
import type { DataCacheState, DataCacheEntry } from '@app/stores/types';

const initialState: Omit<DataCacheState, 'fetchData' | 'invalidate'> = {
  cache: {},
};

/** Simple key-based data cache */
export const useDataCacheStore = create<DataCacheState>()(
  withDevtools(
    withPersist('cache')(
      withCombine(initialState, (set) => ({
        async fetchData(key, fetcher) {
          set((state) => ({ cache: { ...state.cache, [key]: { isLoading: true } } }));
          try {
            const data = await fetcher();
            set((state) => ({ cache: { ...state.cache, [key]: { data, isLoading: false } } }));
          } catch (e: any) {
            set((state) => ({
              cache: { ...state.cache, [key]: { isLoading: false, error: e.message } },
            }));
          }
        },
        invalidate(key) {
          set((state) => {
            const { [key]: _, ...rest } = state.cache;
            return { cache: rest };
          });
        },
      }))
    )
  )
);

export const dataCacheInitialState = initialState;
