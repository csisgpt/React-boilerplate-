import { useThemeStore } from '@app/stores/useThemeStore';

/** Returns the current theme mode */
export const useTheme = () => useThemeStore((s) => s.theme);
