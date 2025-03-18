import { createTamagui } from '@tamagui/core';
import { createTheme, createThemes } from '@xsolla-zk-ui/config';
import { webConfig } from '@xsolla-zk-ui/config/web';
import { badgeTheme } from './src/components/badge/badge.theme';
import { buttonTheme } from './src/components/button/button.theme';
import { loaderTheme } from './src/components/loader/loader.theme';
import { pimpleTheme } from './src/components/pimple/pimple.theme';

const baseTheme = createTheme((tokens) => ({
  background: tokens['layer.floor-0'],
  color: tokens['content.neutral-primary'],
}));

const themesCompose = createThemes(webConfig.themes, {
  base: baseTheme,
  components: {
    button: buttonTheme,
    loader: loaderTheme,
    badge: badgeTheme,
    pimple: pimpleTheme,
  },
});

// console.log(
//   createThemes(
//     {
//       light: {
//         'background.brand-high': '#000',
//         'overlay.brand': '#000',
//         'content.static-dark-primary': '#000',
//         'content.brand-primary': '#000',
//         'background.neutral-high': '#000',
//         'content.neutral-primary-inverted': '#000',
//         'overlay.warning': '#000',
//         'content.warning-primary': '#000',
//       },
//       dark: {
//         'background.brand-high': '#fff',
//         'overlay.brand': '#fff',
//         'content.static-dark-primary': '#fff',
//         'content.brand-primary': '#fff',
//         'background.neutral-high': '#fff',
//         'content.neutral-primary-inverted': '#fff',
//         'overlay.warning': '#fff',
//         'content.warning-primary': '#fff',
//       },
//     },
//     {
//       components: {
//         button: buttonTheme,
//       },
//     },
//   ),
// );

export const config = createTamagui({
  ...webConfig,
  tokens: {
    ...webConfig.tokens,
    color: {
      background: '#fff',
      color: '#000',
      backgroundSecondary: '#fff',
      backgroundTertiary: '#fff',
      colorSecondary: '#000',
      colorTertiary: '#000',
      colorSpin: '#000',
    },
  },
  themes: themesCompose,
});

export type AppConfig = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
  // if you want types for group styling props, define them like so:
  // interface TypeOverride {
  //   groupNames(): 'card'
  // }
}
