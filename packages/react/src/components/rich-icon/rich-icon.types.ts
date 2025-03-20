import type { RICH_ICON_SHAPES } from './rich-icon.constants';
import type { RichIconFrame, RichIconShapePath } from './rich-icon.styled';
import type { ColorTokens, GetProps, GetThemeValueForKey } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import type { OpaqueColorValue } from 'react-native';

export type RichIconShape = keyof typeof RICH_ICON_SHAPES;
export type RichIconSizes = keyof ComponentsConfig['richIcon'];

export type RichIconContextType = {
  size: RichIconSizes;
  color: ColorType;
  backgroundColor: ColorTokens;
  noShape: boolean;
};

export type RichIconSharedProps = GetProps<typeof RichIconFrame>;

type ColorType = GetThemeValueForKey<'color'> | OpaqueColorValue;

export interface RichIconProps extends RichIconSharedProps {
  shape?: RichIconShape | false;
  backdropProps?: GetProps<typeof RichIconShapePath> & {
    stroke?: ColorType;
  };
  imageSrc?: string;
  color?: RichIconContextType['color'];
}
