import create from 'zustand';
import { withDevtools, withCombine } from '@app/stores/storeConfig';
import type { BreadcrumbState } from '@app/stores/types';

const initialState: Omit<BreadcrumbState, 'setBreadcrumb'> = {
  items: [],
};

/** Breadcrumb trail store */
export const useBreadcrumbStore = create<BreadcrumbState>()(
  withDevtools(
    withCombine(initialState, (set) => ({
      setBreadcrumb(items) {
        set({ items });
      },
    }))
  )
);

export const breadcrumbInitialState = initialState;
