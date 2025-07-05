import { useAuthStore } from '../useAuthStore';
import { resetStores } from '../testUtils';

describe('useAuthStore', () => {
  beforeEach(() => resetStores());

  it('initial state', () => {
    const state = useAuthStore.getState();
    expect(state.user).toBeNull();
  });

  it('setTokens updates tokens', () => {
    useAuthStore.getState().setTokens('a', 'r', { id: '1', name: 't', email: 'e', roles: [] }, []);
    expect(useAuthStore.getState().accessToken).toBe('a');
  });
});
