import create from 'zustand';
import { withDevtools, withPersist, withCombine } from '@app/stores/storeConfig';
import type { ModalState, ModalProps } from '@app/stores/types';

const initialState: Omit<ModalState, 'openModal' | 'closeModal'> = {
  openModals: {},
};

/** Generic modal management */
export const useModalStore = create<ModalState>()(
  withDevtools(
    withPersist('modals')(
      withCombine(initialState, (set) => ({
        openModal(key, props) {
          set((state) => ({ openModals: { ...state.openModals, [key]: props } }));
        },
        closeModal(key) {
          set((state) => {
            const { [key]: _, ...rest } = state.openModals;
            return { openModals: rest };
          });
        },
      }))
    )
  )
);

export const modalInitialState = initialState;
