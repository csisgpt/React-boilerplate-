/**
 * Utility wrappers around Zustand middlewares used across store slices.
 * Provides helper functions for combining state slices, persisting state,
 * and enabling Redux devtools integration.
 */
import { devtools, persist, combine, StateCreator } from 'zustand/middleware';

/**
 * Wrap a store creator with Redux devtools support.
 *
 * @param initializer - Zustand state creator
 * @param options - Optional devtools configuration
 */
export function withDevtools<T>(
  initializer: StateCreator<T>,
  options?: Parameters<typeof devtools>[1]
) {
  return devtools(initializer, options);
}

/**
 * Persist a slice of state under the given key.
 *
 * @param key - Storage key for this slice
 * @returns A function that wraps a store creator with persistence
 */
export function withPersist<T>(key: string) {
  return (initializer: StateCreator<T>) =>
    persist(initializer, { name: key });
}

/**
 * Combine initial state and actions into a single slice helper.
 *
 * @param initialState - Default slice state
 * @param create - Function that returns slice actions
 */
export const withCombine = combine;
