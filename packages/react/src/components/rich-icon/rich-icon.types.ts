import type { RichIconFrame } from './rich-icon.styled';
import type { ColorType } from '../../types';
import type { ComponentsConfig } from '../../utils';
import type { GetProps, UnionableString } from '@tamagui/core';
import type { ReactElement } from 'react';
import type { PathProps } from 'react-native-svg';

export type RichIconShapes = keyof ComponentsConfig['const_shapes'];
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

export interface RichIconProps extends GetProps<typeof RichIconFrame> {
  backdropProps?: ShapePathProps;
  image?: (size: number) => ReactElement;
  color?: ColorType;
  shape?: RichIconShape;
}
