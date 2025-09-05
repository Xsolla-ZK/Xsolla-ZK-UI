import { type CreateTamaguiProps } from '@tamagui/core';
import { wrapTokensWithPx } from '@xsolla-zk/ui-utils';
import { settings } from './settings';
import { sharedConfig } from './shared';
import { themes } from './themes';
import { tokens } from './tokens';
import { fonts } from './tokens/fonts';
import { media } from './tokens/media/web';
import { web } from './tokens/platform';

export const webConfig = {
  ...sharedConfig,
  fonts,
  themes,
  tokens: wrapTokensWithPx(
    {
      ...tokens,
      platform: web,
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
