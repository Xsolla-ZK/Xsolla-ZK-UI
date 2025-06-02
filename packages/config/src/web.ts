import { type CreateTamaguiProps } from '@tamagui/core';
import { settings } from './settings';
import { sharedConfig } from './shared';
import { tokens } from './tokens';
import { fonts } from './tokens/fonts';
import { media } from './tokens/media/web';
import { web } from './tokens/platform';
import { themes } from './tokens/themes';
import { typography } from './tokens/typography';

export const webConfig = {
  ...sharedConfig,
  fonts,
  themes,
  tokens: {
    ...tokens,
    platform: web,
    typography,
  },
  media,
  settings,
  selectionStyles: (theme) => ({
    backgroundColor: theme['background.brand-high'],
    color: theme['content.on-brand'],
  }),
} satisfies CreateTamaguiProps;

// const kk = createAppConfig(webConfig, {
//   button: createComponentTheme(
//     'button',
//     (tokens) => ({
//       background: tokens['layer.floor-0'],
//       color: tokens['content.neutral-primary'],
//     }),
//     {
//       make: (tokens) => ({
//         background: tokens['layer.floor-0'],
//         color: tokens['content.neutral-primary'],
//       }),
//     },
//   ),
// });

// const ff = createTamagui(webConfig);

// const s = ff.themes.light['absinthe.100']
// const s1 = kk.themes.dark['background']
