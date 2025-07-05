import create from 'zustand';
import { withDevtools, withPersist, withCombine } from '@app/stores/storeConfig';
import type { FeatureToggleState } from '@app/stores/types';

const initialState: Omit<FeatureToggleState, 'isEnabled' | 'setFlag'> = {
  flags: {},
};

/** Feature flags store */
export const useFeatureToggleStore = create<FeatureToggleState>()(
  withDevtools(
    withPersist('features')(
      withCombine(initialState, (set, get) => ({
        isEnabled(key) {
          return !!get().flags[key];
        },
        setFlag(key, value) {
          set((s) => ({ flags: { ...s.flags, [key]: value } }));
        },
      }))
    )
  )
);

export const featureToggleInitialState = initialState;
