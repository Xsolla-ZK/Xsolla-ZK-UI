import { settings } from './settings';
import { sharedConfig } from './shared';
import { themes } from './themes';
import { fonts } from './tokens/fonts';
import { media } from './tokens/media/android';
import { android } from './tokens/platform';
import { tokens } from './tokens/tokens';
import { typography } from './tokens/typography';
import type { CreateTamaguiProps } from '@tamagui/core';

export const androidConfig = {
  ...sharedConfig,
  fonts,
  themes,
  tokens: {
    ...tokens,
    platform: android,
    typography,
  },
  media,
  settings,
  selectionStyles: (theme) => ({
    backgroundColor: theme['background.brand-high'],
    color: theme['content.on-brand'],
  }),
} satisfies CreateTamaguiProps;
