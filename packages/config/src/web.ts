import { sharedConfig } from './shared';
import { fonts } from './tokens/fonts';
import { media } from './tokens/media/web';
import { web } from './tokens/platform';
import { settings } from './tokens/settings';
import { themes } from './tokens/themes';
import { tokens } from './tokens/tokens';
import { typography } from './tokens/typography';
import type { CreateTamaguiProps } from '@tamagui/core';

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
} satisfies CreateTamaguiProps;
