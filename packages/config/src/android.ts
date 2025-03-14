import { settings } from './settings';
import { sharedConfig } from './shared';
import { fonts } from './tokens/fonts';
import { media } from './tokens/media/android';
import { android } from './tokens/platform';
import { themes } from './tokens/themes';
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
} satisfies CreateTamaguiProps;
