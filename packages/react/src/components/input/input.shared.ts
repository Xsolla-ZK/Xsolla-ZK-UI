import { Text } from '@tamagui/core';
import type { StaticConfigPublic } from '@tamagui/core';

export const inputSharedStyledOptions = {
  isInput: true,
  accept: {
    placeholderTextColor: 'color',
    selectionColor: 'color',
  } as const,

  validStyles: Text.staticConfig.validStyles,
} satisfies StaticConfigPublic;
