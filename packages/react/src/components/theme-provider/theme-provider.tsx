import { css, Global, ThemeProvider } from '@emotion/react';
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

const ResetCss = () => (
  <Global
    styles={css`
      * {
        margin: 0px;
        padding: 0px;
        font: inherit;
        word-wrap: break-word;
        -webkit-tap-highlight-color: transparent;
      }
      *,
      *::before,
      *::after,
      *::backdrop {
        box-sizing: border-box;
        border-width: 0;
      }
      body {
        line-height: 1;
      }
      table {
        border-collapse: collapse;
        border-spacing: 0;
      }
    `}
  />
);

function XZKUIThemeProviderBase({
  themes,
  resetCss = true,
  children,
}: PropsWithChildren<Pick<XZKUIThemeProviderProps, 'themes' | 'resetCss'>>) {
  const { theme } = useSwitchTheme();
  const currentTheme = getTheme(theme, themes);

  return (
    <ThemeProvider theme={currentTheme}>
      {resetCss && <ResetCss />}
      {children}
    </ThemeProvider>
  );
}

function XZKUIThemeProvider({ defaultTheme, resetCss, themes, children }: XZKUIThemeProviderProps) {
  return (
    <XZKUIThemeSwitchProvider defaultTheme={defaultTheme}>
      <XZKUIThemeProviderBase themes={themes} resetCss={resetCss}>
        {children}
      </XZKUIThemeProviderBase>
    </XZKUIThemeSwitchProvider>
  );
}

export default XZKUIThemeProvider;
