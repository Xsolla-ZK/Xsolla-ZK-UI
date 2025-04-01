import type { Preview } from '@storybook/react';
import { fn } from '@storybook/test';
import { TamaguiProvider, Theme, useTheme, useThemeName } from '@tamagui/core';
import React, { useEffect } from 'react';
import { config } from '../tamagui.config';

const value = {
  light: 't_light',
  dark: 't_dark',
}

// Function to ensure correct prop order in Tamagui components
const withCorrectPropsOrder = (Story, context) => {
  // If the component does not have an explicit render, ensure correct prop order
  if (!context.originalStoryFn.render) {
    const { args } = context;
    // Extract important props that should be applied in a specific order
    const { disabled, isLoading, ...rest } = args;

    // Create new props in the correct order
    const orderedProps = {
      ...rest,
    };

    // Add props in the correct order (from less important to more important)
    if (isLoading !== undefined) orderedProps.isLoading = isLoading;
    if (disabled !== undefined) orderedProps.disabled = disabled;

    // Apply new props to the component
    return <Story args={orderedProps} />;
  }

  // If the story has an explicit render, use it as is
  return <Story />;
};

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
    docs: {
      story: {
        inline: true, // Отображать историю встроенной
        iframeHeight: 'auto', // Автоматическая высота iframe
      },
      canvas: {
        sourceState: 'shown', // Всегда показывать исходный код
      },
      source: {
        state: 'open', // Исходный код открыт по умолчанию
        format: true, // Форматировать исходный код
        language: 'tsx', // Язык подсветки синтаксиса
        excludeDecorators: true, // Исключить декораторы из исходного кода
        // transform: (code: string) => {
        //   // Удаляем анонимные обертки из кода
        //   return code
        //     .replace(/<Themed\(Anonymous\)[^>]*>/g, '')
        //     .replace(/<\/Themed\(Anonymous\)>/g, '')
        //     .replace(/<TamaguiProvider[^>]*>|<\/TamaguiProvider>/g, '')
        //     .replace(/<Theme[^>]*>|<\/Theme>/g, '')
        //     .trim();
        // },
      },
      // Отключаем автоматическое создание заголовков для историй
      // autodocs: {
      //   beforeCanvas: ({ story }) => {
      //     return null;
      //   },
      //   afterCanvas: ({ story }) => {
      //     return null;
      //   },
      // },
    },
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
    onPress: fn(),
  },
  decorators: [
    withCorrectPropsOrder,
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
