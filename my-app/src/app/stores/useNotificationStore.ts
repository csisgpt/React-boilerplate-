import create from 'zustand';
import { withDevtools, withPersist, withCombine } from '@app/stores/storeConfig';
import type { NotificationState, Notification } from '@app/stores/types';

const initialState: Omit<NotificationState, 'enqueue' | 'dequeue'> = {
  notifications: [],
};

/** Toast notification store */
export const useNotificationStore = create<NotificationState>()(
  withDevtools(
    withPersist('notifications')(
      withCombine(initialState, (set) => ({
        enqueue(n) {
          const id = Date.now().toString();
          set((state) => ({ notifications: [...state.notifications, { ...n, id }] }));
        },
        dequeue(id) {
          set((state) => ({ notifications: state.notifications.filter((n) => n.id !== id) }));
        },
      }))
    )
  )
);

export const notificationInitialState = initialState;
