import { ThemeProvider } from '@emotion/react';
import tokensThemes from '@xsolla-zk-ui/tokens/js/themes';
import deepmerge from 'deepmerge';
import XZKUIThemeSwitchProvider, { useSwitchTheme } from './theme-provider.context';
import type { XZKUIThemeProviderProps } from './theme-provider.types';
import type { XZKUIThemesUnion } from '@xsolla-zk-ui/tokens/js/themes';
import type { PropsWithChildren } from 'react';

const getTheme = (theme: XZKUIThemesUnion, themes: XZKUIThemeProviderProps['themes']) =>
  themes?.[theme]
    ? deepmerge(themes[theme], tokensThemes[theme])
    : Object.assign({}, themes, tokensThemes)[theme];

function XZKUIThemeProviderBase({ children }: PropsWithChildren) {
  return <XZKUIThemeSwitchProvider>{children}</XZKUIThemeSwitchProvider>;
}

function XZKUIThemeProvider({ themes, children }: XZKUIThemeProviderProps) {
  const { theme } = useSwitchTheme();
  const currentTheme = getTheme(theme, themes);

  return (
    <XZKUIThemeProviderBase>
      <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
    </XZKUIThemeProviderBase>
  );
}

export default XZKUIThemeProvider;
