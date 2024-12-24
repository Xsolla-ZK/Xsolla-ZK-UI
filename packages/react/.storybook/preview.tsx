import React from 'react';
import type { Preview } from '@storybook/react';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { css, Global, ThemeProvider, useTheme } from '@emotion/react';
import tokensThemes from '../src/tokens/themes';
import theme from '../src/utils/theme';
import { XZKUITheme } from '../src/types/theme';

const GlobalStyles = () => {
  const currentTheme = useTheme() as XZKUITheme;
  return (
    <Global styles={css`
      .sb-show-main,
      .docs-story {
        background: ${currentTheme.theme.background['neutral-low']};
      }
      #storybook-root,
      .docs-story {
        * {
          font-family: ${currentTheme.common.typography.font.text};
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
        value: value.theme.background['neutral-low'],
      }))
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
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
