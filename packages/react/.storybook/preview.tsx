import type { Preview } from '@storybook/react';
import { fn } from '@storybook/test';
import { createStyledContext, Stack, TamaguiProvider, Theme, useTheme, useThemeName } from '@tamagui/core';
import React, { useEffect, useState } from 'react';
import { config } from '../tamagui.config';

const value = {
  light: 't_light',
  dark: 't_dark',
}

function GlobalStyles() {
  const theme = useTheme();
  const themeName = useThemeName();

  useEffect(() => {
    const d = document.documentElement;
    d.classList.remove(...Object.values(value));
    d.classList.add(value[themeName]);
  }, [themeName])

  return (
    <style>
      {`
        .sb-show-main, .docs-story, .sb-show-main [scale], .docs-story [scale] {
          background: ${theme['background.neutral-low'].get()};
        }
        #storybook-root *,
        .docs-story * {
          font-optical-sizing: auto;
          -webkit-font-smoothing: antialiased;
        }
        .sb-show-main * {
          box-sizing: border-box;
        }
      `}
    </style>
  );
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Switch between Tamagui themes",
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' }
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
  tags: ['autodocs'],
  parameters: {
    // docs: {
    //   components: {
    //     code: CodeBlock,
    //   },
    // },
    // backgrounds: {
    //   values: Object.entries(config.themes).map(([key, value]) => ({
    //     name: key,
    //     value: value['background.neutral-low'],
    //   }))
    // },
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
    (Story, { globals }) => {
      return (
        <TamaguiProvider config={config} defaultTheme="light">
          <Theme name={globals.theme || 'light'}>
            <GlobalStyles />
              <Story />
          </Theme>
        </TamaguiProvider>
      );
    },
  ],
};

export default preview;
