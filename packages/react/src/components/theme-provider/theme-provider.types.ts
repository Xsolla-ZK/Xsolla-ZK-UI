import type { XZKUITheme, XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';
import type { ReactNode } from 'react';

export interface XZKUIThemeProviderProps {
  defaultTheme?: XZKUIThemeModeUnion;
  themes?: Record<string, XZKUITheme>;
  children: ReactNode;
}
