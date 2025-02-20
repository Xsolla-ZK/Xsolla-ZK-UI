import { sharedConfig, tokens, themes } from './shared';
import media from './tokens/platform/android/media';
import type { GenericMedia } from './types/helpers';
import type { CreateTamaguiProps } from '@tamagui/core';

export const androidConfig = {
  ...sharedConfig,
  themes,
  tokens,
  media: (Object.keys(media.breakpoint) as Array<keyof typeof media.breakpoint>).reduce(
    (acc, key) => {
      acc[key] = {
        minWidth: media.breakpoint[key],
      };
      return acc;
    },
    {} as GenericMedia<typeof media.breakpoint>,
  ),
} satisfies CreateTamaguiProps;
