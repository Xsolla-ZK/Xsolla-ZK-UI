import type { TextStyle } from '@tamagui/core';
import type { TamaguiConfig } from '@tamagui/core';

type Fonts = TamaguiConfig['fonts'];
type TypographyCategories = keyof Fonts;
type TypographySizes<T extends TypographyCategories> =
  `${keyof Fonts[T]['size'] & (string | number)}`;
type TypographyVariants<T extends TypographyCategories> =
  `${keyof Fonts[T]['weight'] & (string | number)}`;

type GetPresetKeysUnion<T> = T extends TypographyCategories
  ? `${T}.${TypographySizes<T>}.${TypographyVariants<T>}`
  : never;

type SplitKey<T extends string> = T extends `${infer First}.${infer Rest}`
  ? [First, ...SplitKey<Rest>]
  : [T];

type PresetTuple = SplitKey<GetPresetKeysUnion<TypographyCategories>>;

export function getTypographyPreset(preset: GetPresetKeysUnion<TypographyCategories>): TextStyle {
  const [category, size, variant] = preset.split('.') as PresetTuple;

  return {
    fontFamily: `$${category}`,
    fontSize: `$${size}`,
    fontWeight: `$${variant}`,
    lineHeight: `$${size}`,
  };
}
