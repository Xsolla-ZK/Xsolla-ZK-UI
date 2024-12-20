import type { XZKUITheme, XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';
import type { ReactNode } from 'react';

export interface XZKUIThemeProviderProps {
  themeMode?: XZKUIThemeModeUnion;
  themes?: Record<string, XZKUITheme>;
  children: ReactNode;
}
