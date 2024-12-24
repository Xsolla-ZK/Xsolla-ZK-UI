import { ThemeProvider } from '@emotion/react';
import theme from '@xsolla-zk-ui/react/utils/theme';
import deepmerge from 'deepmerge';
import XZKUIThemeSwitchProvider, { useSwitchTheme } from './theme-provider.context';
import type { XZKUIThemeProviderProps } from './theme-provider.types';
import type { XZKUIThemeModeUnion } from '@xsolla-zk-ui/react/types/theme';
import type { PropsWithChildren } from 'react';

const getTheme = (mode: XZKUIThemeModeUnion, themes: XZKUIThemeProviderProps['themes']) => {
  const currentTheme = theme(mode);
  return themes ? deepmerge(currentTheme, themes) : currentTheme;
};

function XZKUIThemeProviderBase({
  themes,
  children,
}: PropsWithChildren<Pick<XZKUIThemeProviderProps, 'themes'>>) {
  const { theme } = useSwitchTheme();
  const currentTheme = getTheme(theme, themes);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}

function XZKUIThemeProvider({ defaultTheme, themes, children }: XZKUIThemeProviderProps) {
  return (
    <XZKUIThemeSwitchProvider defaultTheme={defaultTheme}>
      <XZKUIThemeProviderBase themes={themes}>{children}</XZKUIThemeProviderBase>
    </XZKUIThemeSwitchProvider>
  );
}

export default XZKUIThemeProvider;
