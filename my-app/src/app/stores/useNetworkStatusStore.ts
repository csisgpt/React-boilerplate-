import create from 'zustand';
import { withDevtools, withCombine } from '@app/stores/storeConfig';
import type { NetworkState } from '@app/stores/types';

const initialState: NetworkState = {
  online: typeof navigator !== 'undefined' ? navigator.onLine : true,
};

/** Network status store */
export const useNetworkStatusStore = create<NetworkState>()(
  withDevtools(
    withCombine(initialState, (set) => ({
      // no actions required
    }))
  )
);

if (typeof window !== 'undefined') {
  window.addEventListener('online', () => useNetworkStatusStore.setState({ online: true }));
  window.addEventListener('offline', () => useNetworkStatusStore.setState({ online: false }));
}

export const networkInitialState = initialState;
