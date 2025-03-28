import { createTamagui } from '@tamagui/core';
import { createComponentTheme, createTheme, createThemes } from '@xsolla-zk-ui/config';
import { webConfig } from '@xsolla-zk-ui/config/web';
import { badgeTheme } from './src/components/badge/badge.theme';
import { buttonTheme } from './src/components/button/button.theme';
import { checkboxTheme } from './src/components/checkbox/checkbox.theme';
import { flexButtonTheme } from './src/components/flex-button/flex-button.theme';
import { inputTheme } from './src/components/input/input.theme';
import { loaderTheme } from './src/components/loader/loader.theme';
import { pimpleTheme } from './src/components/pimple/pimple.theme';

const baseTheme = createTheme((tokens) => ({
  background: tokens['layer.floor-0'],
  color: tokens['content.neutral-primary'],
}));

const sheetTheme = createComponentTheme('SheetOverlay', (tokens) => ({
  background: tokens['layer.floor-scrim'],
}));

const themesCompose = createThemes(webConfig.themes, {
  base: baseTheme,
  components: {
    button: buttonTheme,
    loader: loaderTheme,
    badge: badgeTheme,
    pimple: pimpleTheme,
    input: inputTheme,
    flexButton: flexButtonTheme,
    sheet: sheetTheme,
    checkbox: checkboxTheme,
  },
});

export const config = createTamagui({
  ...webConfig,
  tokens: {
    ...webConfig.tokens,
    color: {
      background: '#fff',
      backgroundHover: 'transparent',
      backgroundPress: 'transparent',
      backgroundFocus: 'transparent',
      color: '#000',
      colorHover: 'transparent',
      colorPress: 'transparent',
      colorFocus: 'transparent',
      borderColor: 'transparent',
      borderColorHover: 'transparent',
      borderColorPress: 'transparent',
      borderColorFocus: 'transparent',
      shadowColor: 'transparent',
      shadowColorHover: 'transparent',
      shadowColorPress: 'transparent',
      shadowColorFocus: 'transparent',
      placeholderColor: 'transparent',
    },
  },
  themes: themesCompose,
  selectionStyles: (theme) => ({
    backgroundColor: theme['overlay.brand'],
    color: theme['content.neutral-primary'],
  }),
});

export type AppConfig = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
  // if you want types for group styling props, define them like so:
  // interface TypeOverride {
  //   groupNames(): 'card'
  // }
}
