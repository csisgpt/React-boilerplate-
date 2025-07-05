/**
 * Global application store for cross-cutting app state.
 * Provides loading flags, error messages and mobile menu toggle.
 * Use within React components via `useAppStore()`.
 */
import { create } from 'zustand';
import { withDevtools, withPersist, withCombine } from './storeConfig';

/**
 * useAppStore – central app-level state:
 * - isAppLoading: boolean
 * - globalError: string | null
 * - isMobileMenuOpen: boolean
 */
const initialAppState = {
  isAppLoading: false,
  globalError: null as string | null,
  isMobileMenuOpen: false,
};

const appSlice = withCombine(
  initialAppState,
  (set) => ({
    setAppLoading: (loading: boolean) => set({ isAppLoading: loading }),
    setGlobalError: (message: string | null) => set({ globalError: message }),
    toggleMobileMenu: () =>
      set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  })
);

export const useAppStore = create<{
  isAppLoading: boolean;
  globalError: string | null;
  isMobileMenuOpen: boolean;
  setAppLoading: (loading: boolean) => void;
  setGlobalError: (message: string | null) => void;
  toggleMobileMenu: () => void;
}>()(
  withDevtools(
    withPersist('app')(appSlice),
    { name: 'app-store' }
  )
);
