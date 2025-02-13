import { defaultConfig } from '@tamagui/config/v4';
import { createTamagui, createTokens, getConfig } from '@tamagui/core';
// import radius from './src/tokens-tamagui/common/radius';
// import size from './src/tokens-tamagui/common/size';
// import spacing from './src/tokens-tamagui/common/spacing';
// import tokensThemes from './src/tokens-tamagui/themes';
import type { CreateTamaguiProps, GenericFont } from '@tamagui/core';

export const config = createTamagui({
  displayName: 'tamagui-config',
  // ...defaultConfig,
  // fonts: {
  //   body: createFont(convertFontTokensToGenericFont(typography)),
  //   extra: createFont({
  //     family: 'Inter',
  //     size: {
  //       100: 24,
  //       200: 26,
  //     },
  //   }),
  // },
  // fonts: createFont()
  fonts: {
    display: {
      family: 'Onest',
      size: {
        350: 18,
        400: 22,
        450: 28,
        500: 32,
        600: 36,
        650: 40,
        700: 48,
      },
      lineHeight: {
        350: 22,
        400: 26,
        450: 32,
        500: 38,
        600: 42,
        650: 48,
        700: 56,
      },
      weight: {
        default: 500,
        numeric: 500,
        accent: 600,
        accentNumeric: 600,
      },
      letterSpacing: {},
    },
    compact: {
      family: 'Onest',
      size: {
        150: 10,
        200: 12,
        250: 14,
        300: 16,
        350: 18,
        400: 22,
      },
      lineHeight: {
        150: 12,
        200: 14,
        250: 16,
        300: 18,
        350: 22,
        400: 26,
      },
      weight: {
        default: 500,
        numeric: 500,
        accent: 600,
        accentNumeric: 600,
      },
      letterSpacing: {},
    },
  },
  tokens: createTokens(defaultConfig.tokens),

  // themes: {
  //   ...tokensThemes,
  //   // light: {
  //   //   background: '#c9f938',
  //   //   theme: {
  //   //     color: createVariable({ value: 'black' }),
  //   //   },
  //   //   palette: {
  //   //     brand: {
  //   //       '500': '#c9f938',
  //   //     },
  //   //   },
  //   // },
  //   // define a Button sub-theme, see the Themes docs for more
  //   light_Button: {
  //     background: '#c9f938',
  //     backgroundPress: '#bbb', // darker background on press
  //     backgroundHover: '#ddd', // lighter background on hover
  //     color: 'black',
  //   },
  // },
  // media: {},
  // shorthands,
});

// in other files use this:
console.log(`config is`, getConfig());

// get typescript types on @tamagui/core imports:
type AppConfig = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {
    // themes?: {
    //   [key: string]: (typeof tokensThemes)['dark'];
    // };
  }
  // if you want types for group styling props, define them like so:
  // interface TypeOverride {
  //   groupNames(): 'card'
  // }
}
