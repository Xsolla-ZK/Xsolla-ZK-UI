import { settings } from './settings';
import { sharedConfig } from './shared';
import { fonts } from './tokens/fonts';
import { media } from './tokens/media/ios';
import { ios } from './tokens/platform';
import { themes } from './tokens/themes';
import { tokens } from './tokens/tokens';
import { typography } from './tokens/typography';
import type { CreateTamaguiProps } from '@tamagui/core';

export const iosConfig = {
  ...sharedConfig,
  fonts,
  themes,
  tokens: {
    ...tokens,
    platform: ios,
    typography,
  },
  media,
  settings,
} satisfies CreateTamaguiProps;
