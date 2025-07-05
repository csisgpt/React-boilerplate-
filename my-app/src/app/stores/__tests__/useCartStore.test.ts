import { useCartStore } from '../useCartStore';
import { resetStores } from '../testUtils';

describe('useCartStore', () => {
  beforeEach(() => resetStores());

  it('adds item and computes total', () => {
    useCartStore.getState().addItem({ id: '1', quantity: 2, price: 5 });
    expect(useCartStore.getState().total()).toBe(10);
  });
});
