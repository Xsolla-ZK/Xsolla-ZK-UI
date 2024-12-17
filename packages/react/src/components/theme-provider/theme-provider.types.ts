import type { XZKUITheme } from '@xsolla-zk-ui/tokens/js/themes';
import type { ReactNode } from 'react';

export interface XZKUIThemeProviderProps {
  themes: Record<string, XZKUITheme>;
  children: ReactNode;
}
