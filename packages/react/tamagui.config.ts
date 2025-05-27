import { createTamagui } from '@tamagui/core';
import { createTheme, createThemes } from '@xsolla-zk/config';
import { webConfig } from '@xsolla-zk/config/web';
import { componentsTheme } from './src';

const baseTheme = createTheme((tokens) => ({
  background: tokens['layer.floor-0'],
  color: tokens['content.neutral-primary'],
}));

const themesCompose = createThemes(webConfig.themes, {
  base: baseTheme,
  components: componentsTheme,
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
      outlineColor: 'transparent',
      spinColor: 'transparent',
    },
  },
  themes: themesCompose,
  selectionStyles: (theme) => ({
    backgroundColor: theme['background.brand-high'],
    color: theme['content.on-brand'],
  }),
});

export type AppConfig = typeof config;

declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
