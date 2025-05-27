import { styled, Text } from '@tamagui/core';
import { getTypographyPreset } from '../../utils';
import type { TypographyPresets } from '../../types';

export const Typography = styled(Text, {
  color: '$color',
  tag: 'span',

  variants: {
    preset: (val: TypographyPresets) => getTypographyPreset(val),
  } as const,
  defaultVariants: {
    preset: 'text.250.default',
  },
});
