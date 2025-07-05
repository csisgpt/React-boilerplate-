import create from 'zustand';
import { withDevtools, withCombine } from '@app/stores/storeConfig';
import type { FormWizardState } from '@app/stores/types';

const initialState: Omit<FormWizardState, 'nextStep' | 'prevStep' | 'setData'> = {
  step: 0,
  data: {},
};

/** Multi-step form state */
export const useFormWizardStore = create<FormWizardState>()(
  withDevtools(
    withCombine(initialState, (set, get) => ({
      nextStep() {
        set({ step: get().step + 1 });
      },
      prevStep() {
        set({ step: Math.max(get().step - 1, 0) });
      },
      setData(partial) {
        set((state) => ({ data: { ...state.data, ...partial } }));
      },
    }))
  )
);

export const formWizardInitialState = initialState;
