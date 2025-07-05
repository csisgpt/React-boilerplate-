/**
 * useAppStore – central app-level state
 *
 * Example:
 * const { isAppLoading, setAppLoading, globalError, setGlobalError, isMobileMenuOpen, toggleMobileMenu } =
 *   useAppStore();
 */
import { create } from 'zustand';
import { withDevtools, withPersist, withCombine } from './storeConfig';

/**
 * Default values for global application state managed by useAppStore.
 */
const initialAppState = {
  /** Indicates if the entire application is loading */
  isAppLoading: false,
  /** Holds an optional global error message */
  globalError: null as string | null,
  /** Controls visibility of the mobile navigation menu */
  isMobileMenuOpen: false,
};

/**
 * Application slice with actions for updating global UI state.
 */
const appSlice = withCombine(initialAppState, (set) => ({
  /** Toggle loading state shown across the app */
  setAppLoading: (loading: boolean) => set({ isAppLoading: loading }),
  /** Set or clear a global error message */
  setGlobalError: (message: string | null) => set({ globalError: message }),
  /** Toggle the mobile menu open or closed */
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
}));

/**
 * Zustand hook exposing app-wide UI state with persistence and devtools.
 */
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
