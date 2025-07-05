import { useNetworkStatusStore } from '../useNetworkStatusStore';
import { resetStores } from '../testUtils';

describe('useNetworkStatusStore', () => {
  beforeEach(() => resetStores());

  it('initial state reflects navigator', () => {
    expect(typeof useNetworkStatusStore.getState().online).toBe('boolean');
  });
});
