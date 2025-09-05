import { wrapTokensWithPx } from '@xsolla-zk/ui-utils';
import { settings } from './settings';
import { sharedConfig } from './shared';
import { themes } from './themes';
import { fonts } from './tokens/fonts';
import { media } from './tokens/media/android';
import { android } from './tokens/platform';
import { tokens } from './tokens/tokens';
import type { CreateTamaguiProps } from '@tamagui/core';

export const androidConfig = {
  ...sharedConfig,
  fonts,
  themes,
  tokens: wrapTokensWithPx(
    {
      ...tokens,
      platform: android,
    },
    ['platform', 'stroke'],
  ),
  media,
  settings,
  selectionStyles: (theme) => ({
    backgroundColor: theme['background.brand-high'],
    color: theme['content.on-brand'],
  }),
} satisfies CreateTamaguiProps;
