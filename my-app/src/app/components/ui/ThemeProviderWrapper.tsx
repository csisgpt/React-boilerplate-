import React from 'react';
import { ThemeProvider } from '@app/components/theme';

const I18nProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => <>{children}</>;
const AuthProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => <>{children}</>;

export interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

export const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({ children }) => (
  <ThemeProvider>
    <I18nProvider>
      <AuthProvider>{children}</AuthProvider>
    </I18nProvider>
  </ThemeProvider>
);

export default ThemeProviderWrapper;
