import type { RichIconFrame, RichIconShapePath } from './rich-icon.styled';
import type { ColorType } from '../../types';
import type { ComponentsConfig } from '../../utils';
import type { GetProps, UnionableString } from '@tamagui/core';
import type { RICH_ICON_SHAPES } from '@xsolla-zk/constants';

export type RichIconShape = keyof typeof RICH_ICON_SHAPES;
export type RichIconSizes = keyof ComponentsConfig['richIcon'] | (string & {});

export type RichIconContextType = {
  size: RichIconSizes;
  color: ColorType;
  backgroundColor: ColorType;
  noShape: boolean;
};

export type RichIconSharedProps = GetProps<typeof RichIconFrame>;

export interface RichIconProps extends RichIconSharedProps {
  shape?: RichIconShape | false | UnionableString;
  backdropProps?: GetProps<typeof RichIconShapePath>;
  imageSrc?: string;
  color?: RichIconContextType['color'];
}
