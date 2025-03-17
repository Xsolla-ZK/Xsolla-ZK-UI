import { getTypographyPreset } from './get-typography-preset';
import type { TypographyPresets } from '../types/typography';
import type { SizeKeys, ThemeValueGet } from '@tamagui/core';

export const validProps = {
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  width: true,
  height: true,
  minWidth: true,
  minHeight: true,
  maxWidth: true,
  maxHeight: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  margin: true,
  marginBottom: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
  marginVertical: true,
  padding: true,
  paddingBottom: true,
  paddingLeft: true,
  paddingRight: true,
  paddingTop: true,
  paddingHorizontal: true,
  paddingVertical: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderTopWidth: true,
  borderWidth: true,
};

export type ValidKeys = keyof typeof validProps;
export type ValidExtraKeys = keyof typeof validExtraProps;

export type ValidBaseProps = {
  [K in ValidKeys]?: ThemeValueGet<K>;
};

export type ValidExtraProps = Partial<{
  size: ThemeValueGet<SizeKeys>;
  minSize: ThemeValueGet<SizeKeys>;
  maxSize: ThemeValueGet<SizeKeys>;
  typography: TypographyPresets;
}>;

export type ValidProps = ValidBaseProps & ValidExtraProps;

export const validExtraProps = {
  size: true,
  minSize: true,
  maxSize: true,
  typography: true,
};

export const propsMap = {
  minSize: ['minWidth', 'minHeight'],
  maxSize: ['maxWidth', 'maxHeight'],
  size: ['width', 'height'],
  typography: getTypographyPreset,
} as Record<ValidExtraKeys, ValidKeys | ValidKeys[] | ((...args: any[]) => unknown)>;
