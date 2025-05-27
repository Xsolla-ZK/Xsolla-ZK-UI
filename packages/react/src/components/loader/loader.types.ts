import type { LOADER_COMPONENT_NAME } from './loader.constants';
import type { LoaderFrame } from './loader.styled';
import type { ColorType } from '../../types';
import type { GetComponentTone } from '../../types';
import type { GetProps } from '@tamagui/core';

export type LoaderTone = GetComponentTone<typeof LOADER_COMPONENT_NAME>;

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
