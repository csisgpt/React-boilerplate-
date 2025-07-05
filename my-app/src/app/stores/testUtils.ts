import { useAuthStore, authInitialState } from '@app/stores/useAuthStore';
import { useUiStore, uiInitialState } from '@app/stores/useUiStore';
import { useThemeStore, themeInitialState } from '@app/stores/useThemeStore';
import { useNotificationStore, notificationInitialState } from '@app/stores/useNotificationStore';
import { useModalStore, modalInitialState } from '@app/stores/useModalStore';
import { useFormWizardStore, formWizardInitialState } from '@app/stores/useFormWizardStore';
import { useDataCacheStore, dataCacheInitialState } from '@app/stores/useDataCacheStore';
import { usePaginationStore, paginationInitialState } from '@app/stores/usePaginationStore';
import { useNetworkStatusStore, networkInitialState } from '@app/stores/useNetworkStatusStore';
import { useCartStore, cartInitialState } from '@app/stores/useCartStore';
import {
  useFeatureToggleStore,
  featureToggleInitialState,
} from '@app/stores/useFeatureToggleStore';
import { useBreadcrumbStore, breadcrumbInitialState } from '@app/stores/useBreadcrumbStore';
import { useLocalizationStore, localizationInitialState } from '@app/stores/useLocalizationStore';
import { useLoadingStore, loadingInitialState } from '@app/stores/useLoadingStore';
import { useChatStore, chatInitialState } from '@app/stores/useChatStore';

/** Reset all stores to initial state and clear persistence */
export function resetStores() {
  useAuthStore.setState(authInitialState, true);
  useUiStore.setState(uiInitialState, true);
  useThemeStore.setState(themeInitialState, true);
  useNotificationStore.setState(notificationInitialState, true);
  useModalStore.setState(modalInitialState, true);
  useFormWizardStore.setState(formWizardInitialState, true);
  useDataCacheStore.setState(dataCacheInitialState, true);
  usePaginationStore.setState(paginationInitialState, true);
  useNetworkStatusStore.setState(networkInitialState, true);
  useCartStore.setState(cartInitialState, true);
  useFeatureToggleStore.setState(featureToggleInitialState, true);
  useBreadcrumbStore.setState(breadcrumbInitialState, true);
  useLocalizationStore.setState(localizationInitialState, true);
  useLoadingStore.setState(loadingInitialState, true);
  useChatStore.setState(chatInitialState, true);

  localStorage.clear();
}
