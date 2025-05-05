import type { LOADER_COMPONENT_NAME } from './loader.constants';
import type { LoaderFrame } from './loader.styled';
import type { GetProps, GetThemeValueForKey } from '@tamagui/core';
import type { GetComponentTone } from '@xsolla-zk/react/types/theme';
import type { OpaqueColorValue } from 'react-native';

export type LoaderTone = GetComponentTone<typeof LOADER_COMPONENT_NAME>;

type ColorType = GetThemeValueForKey<'color'> | OpaqueColorValue;

export type LoaderContextType = {
  size: number;
  mainColor: ColorType;
  spinColor: ColorType;
};

type LoaderSharedProps = GetProps<typeof LoaderFrame>;

export interface LoaderProps extends LoaderSharedProps {
  tone?: LoaderTone;
  mainColor?: ColorType;
  spinColor?: ColorType;
}
