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

export type TypographyPresets = GetPresetKeysUnion<TypographyCategories>;
