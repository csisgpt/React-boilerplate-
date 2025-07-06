import create from 'zustand';
import { useCallback } from 'react';

export type ToastType = 'success' | 'info' | 'warning' | 'error';
export interface ToastItem {
  id: string;
  type: ToastType;
  message: string;
  duration: number;
  onClose?: () => void;
}
interface ToastState {
  toasts: ToastItem[];
  add: (t: Omit<ToastItem, 'id'>) => string;
  remove: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  add(t) {
    const id = Date.now().toString();
    set((s) => ({ toasts: [...s.toasts, { ...t, id }] }));
    return id;
  },
  remove(id) {
    set((s) => ({ toasts: s.toasts.filter((n) => n.id !== id) }));
  },
}));

export function useToast() {
  const add = useToastStore((s) => s.add);
  const remove = useToastStore((s) => s.remove);

  const show = useCallback(
    (t: Omit<ToastItem, 'id'>) => {
      const id = add(t);
      if (t.duration > 0) {
        setTimeout(() => remove(id), t.duration);
      }
      return id;
    },
    [add, remove]
  );

  return { show, remove };
}
