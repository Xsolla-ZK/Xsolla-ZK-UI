import type { TypographyPresets } from '../types/typography';
import type { TextStyle } from '@tamagui/core';

// type SplitKey<T extends string> = T extends `${infer First}.${infer Rest}`
//   ? [First, ...SplitKey<Rest>]
//   : [T];

// type PresetTuple = SplitKey<TypographyPresets>;
type PresetTuple = string[];

export function getTypographyPreset(preset: TypographyPresets): TextStyle {
  const [category, size, variant] = preset.split('.') as PresetTuple;

  return {
    fontFamily: `$${category}` as TextStyle['fontFamily'],
    fontSize: `$${size}`,
    fontWeight: `$${variant}`,
    lineHeight: `$${size}`,
  };
}
