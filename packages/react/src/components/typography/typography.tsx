import { Text } from '@tamagui/core';
import { getTypographyPreset, smartContextStyled } from '../../utils';
import type { TypographyPresets } from '../../types';

export const Typography = smartContextStyled(Text, {
  color: '$color',
  tag: 'span',

  variants: {
    preset: (val: TypographyPresets) => getTypographyPreset(val),
  } as const,
  defaultVariants: {
    preset: 'text.250.default',
  },
});
