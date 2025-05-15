import type { LOADER_COMPONENT_NAME } from './loader.constants';
import type { LoaderFrame } from './loader.styled';
import type { GetProps } from '@tamagui/core';
import type { ColorType } from '@xsolla-zk/react/types/color';
import type { GetComponentTone } from '@xsolla-zk/react/types/theme';

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
