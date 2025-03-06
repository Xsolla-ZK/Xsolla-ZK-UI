import { createTamagui } from '@tamagui/core';
import { createComponentTheme, createTheme, createThemes } from '@xsolla-zk-ui/config';
import { webConfig } from '@xsolla-zk-ui/config/web';

const baseTheme = createTheme((tokens) => ({
  background: tokens['layer.floor-0'],
  color: tokens['content.neutral-primary'],
}));

const buttonTheme = createComponentTheme(
  'Button',
  (tokens) => ({
    background: tokens['background.brand-high'],
    color: tokens['content.static-dark-primary'],
  }),
  {
    secondary: (tokens) => ({
      background: tokens['overlay.neutral'],
      color: tokens['content.neutral-primary'],
    }),
  },
);

const themesCompose = createThemes(webConfig.themes, {
  base: baseTheme,
  components: {
    button: buttonTheme,
  },
});

export const config = createTamagui({
  ...webConfig,
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
