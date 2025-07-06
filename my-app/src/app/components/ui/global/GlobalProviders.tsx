import React from 'react';
import { ThemeProvider } from '@app/components/theme';
import { ErrorBoundaryWrapper } from '@app/components/interaction';
import { FeatureFlagProvider } from './FeatureFlagProvider';
import { AnalyticsProvider } from './AnalyticsProvider';
import { GlobalStyles } from './GlobalStyles';
import { useAuthStore } from '@app/stores/useAuthStore';
import { useLocalizationStore } from '@app/stores/useLocalizationStore';

interface AuthContextValue extends ReturnType<typeof useAuthStore> {}
const AuthContext = React.createContext<AuthContextValue | undefined>(undefined);
export const useAuth = () => {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

interface AuthProviderProps { children: React.ReactNode }
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const store = useAuthStore();
  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};

interface I18nContextValue {
  language: string;
  setLanguage: (l: string) => void;
}
const I18nContext = React.createContext<I18nContextValue | undefined>(undefined);
export const useI18n = () => {
  const ctx = React.useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};

interface I18nProviderProps { children: React.ReactNode }
const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const { language, setLanguage } = useLocalizationStore();
  return (
    <I18nContext.Provider value={{ language, setLanguage }}>
      {children}
    </I18nContext.Provider>
  );
};

export interface Props { children: React.ReactNode }

/** Compose application wide providers */
export const GlobalProviders: React.FC<Props> = ({ children }) => (
  <FeatureFlagProvider>
    <AuthProvider>
      <I18nProvider>
        <ThemeProvider>
          <AnalyticsProvider>
            <ErrorBoundaryWrapper>
              <GlobalStyles />
              {children}
            </ErrorBoundaryWrapper>
          </AnalyticsProvider>
        </ThemeProvider>
      </I18nProvider>
    </AuthProvider>
  </FeatureFlagProvider>
);
