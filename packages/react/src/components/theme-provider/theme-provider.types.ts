import type { Theme } from '@emotion/react';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';
import type { ReactNode } from 'react';

type Themed = Omit<Theme, 'mode' | 'common' | 'layout'>;
export interface XZKUIThemeProviderProps {
  defaultTheme?: XZKUIThemeModeUnion;
  resetCss?: boolean;
  themes?: Record<XZKUIThemeModeUnion, Themed> & {
    [key: string]: Themed;
  };
  children: ReactNode;
}
