import create from 'zustand';
import { withDevtools, withCombine } from '@app/stores/storeConfig';
import type { PaginationState } from '@app/stores/types';

const initialState: Omit<PaginationState, 'setPage' | 'setPageSize' | 'setFilters' | 'setSort'> = {
  page: 1,
  pageSize: 10,
  filters: {},
  sort: null,
};

/** Table pagination store */
export const usePaginationStore = create<PaginationState>()(
  withDevtools(
    withCombine(initialState, (set) => ({
      setPage(p) {
        set({ page: p });
      },
      setPageSize(s) {
        set({ pageSize: s });
      },
      setFilters(f) {
        set({ filters: f });
      },
      setSort(field, direction) {
        set({ sort: { field, direction } });
      },
    }))
  )
);

export const paginationInitialState = initialState;
