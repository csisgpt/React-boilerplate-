import create from 'zustand';
import { withDevtools, withPersist, withCombine } from '@app/stores/storeConfig';
import type { CartState, CartItem } from '@app/stores/types';

const initialState: Omit<
  CartState,
  'addItem' | 'removeItem' | 'updateQuantity' | 'clearCart' | 'total'
> = {
  items: [],
};

/** Shopping cart logic */
export const useCartStore = create<CartState>()(
  withDevtools(
    withPersist('cart')(
      withCombine(initialState, (set, get) => ({
        addItem(item) {
          set((s) => ({ items: [...s.items, item] }));
        },
        removeItem(id) {
          set((s) => ({ items: s.items.filter((i) => i.id !== id) }));
        },
        updateQuantity(id, q) {
          set((s) => ({ items: s.items.map((i) => (i.id === id ? { ...i, quantity: q } : i)) }));
        },
        clearCart() {
          set({ items: [] });
        },
        total() {
          return get().items.reduce((sum, i) => sum + i.price * i.quantity, 0);
        },
      }))
    )
  )
);

export const cartInitialState = initialState;
