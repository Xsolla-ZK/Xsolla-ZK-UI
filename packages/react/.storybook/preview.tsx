import React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { css, Global, ThemeProvider, useTheme } from '@emotion/react';
import tokensThemes from '../src/tokens/themes';
import theme from '../src/utils/theme';
import { XZKUITheme } from '../src/types/theme';
import { fn } from '@storybook/test';

const GlobalStyles = () => {
  const currentTheme = useTheme() as XZKUITheme;
  return (
    <Global styles={css`
      .sb-show-main,
      .docs-story {
        background: ${currentTheme.theme.background.neutralLow};
      }
      #storybook-root,
      .docs-story {
        * {
          font-family: ${currentTheme.common.typography.font.text};
          font-optical-sizing: auto;
          -webkit-font-smoothing: antialiased;
        }
      }
    `} />
  );
}

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    // docs: {
    //   components: {
    //     code: CodeBlock,
    //   },
    // },
    backgrounds: {
      values: Object.entries(tokensThemes).map(([key, value]) => ({
        name: key,
        value: value.theme.background.neutralLow,
      }))
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  args: {
    onClick: fn(),
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: Object.keys(tokensThemes).reduce((acc, curr) => {
        acc[curr] = theme(curr as keyof typeof tokensThemes);
        return acc;
      }, {}),
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
