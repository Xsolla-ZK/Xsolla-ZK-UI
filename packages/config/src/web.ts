import { type CreateTamaguiProps } from '@tamagui/core';
import { settings } from './settings';
import { sharedConfig } from './shared';
import { themes } from './themes';
import { tokens } from './tokens';
import { fonts } from './tokens/fonts';
import { media } from './tokens/media/web';
import { web } from './tokens/platform';
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
