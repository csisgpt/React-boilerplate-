import { useAuthStore } from '@app/stores/useAuthStore';
import { useNotificationStore } from '@app/stores/useNotificationStore';
import { useNetworkStatusStore } from '@app/stores/useNetworkStatusStore';
import { useLoadingStore } from '@app/stores/useLoadingStore';
import { useCartStore } from '@app/stores/useCartStore';

export const useCurrentUser = () => useAuthStore((s) => s.user);
export const useIsAuthenticated = () => useAuthStore((s) => !!s.accessToken);
export const useNotifications = () => useNotificationStore((s) => s.notifications);
export const useIsOnline = () => useNetworkStatusStore((s) => s.online);
export const useIsLoading = (key?: string) => useLoadingStore((s) => s.isLoading(key));
export const useCartTotal = () => useCartStore((s) => s.total());
