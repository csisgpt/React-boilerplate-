import create from 'zustand';
import { withDevtools, withCombine } from '@app/stores/storeConfig';
import type { ChatState, ChatMessage } from '@app/stores/types';

const initialState: Omit<ChatState, 'sendMessage' | 'receiveMessage' | 'markAsRead'> = {
  threads: {},
};

/** Chat messaging store */
export const useChatStore = create<ChatState>()(
  withDevtools(
    withCombine(initialState, (set) => ({
      sendMessage(threadId, msg) {
        set((s) => ({
          threads: { ...s.threads, [threadId]: [...(s.threads[threadId] || []), msg] },
        }));
      },
      receiveMessage(threadId, msg) {
        set((s) => ({
          threads: { ...s.threads, [threadId]: [...(s.threads[threadId] || []), msg] },
        }));
      },
      markAsRead(threadId) {
        // stub - would mark messages read in real app
        set((s) => ({ threads: { ...s.threads, [threadId]: s.threads[threadId] || [] } }));
      },
    }))
  )
);

export const chatInitialState = initialState;
