import { sharedConfig } from './shared';
import { fonts } from './tokens/fonts';
import { media } from './tokens/media/web';
import { web } from './tokens/platform';
import { settings } from './tokens/settings';
import { themes } from './tokens/themes';
import { tokens } from './tokens/tokens';
import { typography } from './tokens/typography';
import { createComponentTheme, createTheme, deepMerge } from './utils/create-component-theme';
import type { CreateTamaguiProps } from '@tamagui/core';

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

export const webConfig = {
  ...sharedConfig,
  fonts,
  themes: {
    ...deepMerge(themes, baseTheme),
    ...buttonTheme,
  },
  tokens: {
    ...tokens,
    platform: web,
    typography,
  },
  media,
  settings,
} satisfies CreateTamaguiProps;
