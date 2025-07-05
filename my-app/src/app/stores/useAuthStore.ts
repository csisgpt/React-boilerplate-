import create from 'zustand';
import { withDevtools, withPersist, withCombine } from '@app/stores/storeConfig';
import type { AuthState, User } from '@app/stores/types';

const initialState: Omit<AuthState, 'login' | 'logout' | 'setTokens'> = {
  accessToken: null,
  refreshToken: null,
  user: null,
  roles: [],
  isLoading: false,
  error: null,
};

/**
 * Authentication store handling tokens and user info.
 */
export const useAuthStore = create<AuthState>()(
  withDevtools(
    withPersist('auth')(
      withCombine(initialState, (set) => ({
        async login(creds) {
          set({ isLoading: true, error: null });
          try {
            // simulate api call
            await new Promise((r) => setTimeout(r, 50));
            const user: User = {
              id: '1',
              name: creds.email,
              email: creds.email,
              roles: ['user'],
            };
            set({
              accessToken: 'token',
              refreshToken: 'refresh',
              user,
              roles: user.roles,
              isLoading: false,
            });
          } catch (e: any) {
            set({ error: e.message ?? 'Login error', isLoading: false });
          }
        },
        logout() {
          set({ accessToken: null, refreshToken: null, user: null, roles: [] });
        },
        setTokens(access, refresh, user, roles) {
          set({ accessToken: access, refreshToken: refresh, user, roles });
        },
      }))
    )
  )
);

export const authInitialState = initialState;
