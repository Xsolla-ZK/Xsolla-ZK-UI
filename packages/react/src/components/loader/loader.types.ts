import type { LoaderFrame } from './loader.styled';
import type { GetProps, GetThemeValueForKey } from '@tamagui/core';
import type { OpaqueColorValue } from 'react-native';

type ColorType = GetThemeValueForKey<'color'> | OpaqueColorValue;

export type LoaderContextType = {
  size: number;
  mainColor: ColorType;
  spinColor: ColorType;
};

type LoaderSharedProps = GetProps<typeof LoaderFrame>;

export interface LoaderProps extends LoaderSharedProps {}
