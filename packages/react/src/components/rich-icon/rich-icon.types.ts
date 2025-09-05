import type { RichIconFrame } from './rich-icon.styled';
import type { ColorType } from '../../types';
import type { ComponentsConfig } from '../../utils';
import type { ColorTokens, GetProps, UnionableString } from '@tamagui/core';
import type { RICH_ICON_SHAPES } from '@xsolla-zk/constants';
import type { ReactElement, ReactNode } from 'react';
import type { PathProps } from 'react-native-svg';

export type RichIconShapes = keyof typeof RICH_ICON_SHAPES;
export type RichIconSizes = keyof ComponentsConfig['richIcon'] | (string & {});

export type RichIconShape = RichIconShapes | false | UnionableString;

export type RichIconContextType = {
  size: RichIconSizes;
  color: ColorType;
  backgroundColor: ColorType;
  shape: RichIconShape;
};

export interface ShapePathProps extends PathProps {
  stroke?: ColorType;
  fill?: ColorType;
}

export interface RichIconProps extends Omit<GetProps<typeof RichIconFrame>, 'backgroundColor'> {
  backdropProps?: ShapePathProps;
  image?: (size: number) => ReactElement;
  color?: ColorType;
  shape?: RichIconShape;
  // backgroundColor?: ColorType;
}
