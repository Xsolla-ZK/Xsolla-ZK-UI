import { wrapTokensWithPx } from '@xsolla-zk/ui-utils';
import { settings } from './settings';
import { sharedConfig } from './shared';
import { themes } from './themes';
import { fonts } from './tokens/fonts';
import { media } from './tokens/media/ios';
import { ios } from './tokens/platform';
import { tokens } from './tokens/tokens';
import type { CreateTamaguiProps } from '@tamagui/core';

export const iosConfig = {
  ...sharedConfig,
  fonts,
  themes,
  tokens: wrapTokensWithPx(
    {
      ...tokens,
      platform: ios,
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
