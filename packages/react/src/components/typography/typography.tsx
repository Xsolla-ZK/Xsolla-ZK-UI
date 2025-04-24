import { styled, Text } from '@tamagui/core';
import { getTypographyPreset } from '@xsolla-zk-ui/react/utils/get-typography-preset';
import type { TypographyPresets } from '@xsolla-zk-ui/react/types/typography';

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
