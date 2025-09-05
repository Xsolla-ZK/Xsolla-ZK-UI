import type { ValidBaseProps } from '../utils/valid-props';
import type { StackStyle, TextStyle, WithThemeShorthandsPseudosMedia } from '@tamagui/core';

export type ValidStylesReturn = WithThemeShorthandsPseudosMedia<ValidBaseProps>;
export type ValidAllStylesReturn = StackStyle | TextStyle;
