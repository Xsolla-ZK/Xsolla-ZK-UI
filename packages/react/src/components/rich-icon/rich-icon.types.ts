import type { RichIconFrame, richIconPaths } from './rich-icon.styled';
import type { ColorTokens, GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import type { Path } from 'react-native-svg';

export type RichIconShape = keyof typeof richIconPaths;
export type RichIconSizes = keyof ComponentsConfig['richIcon'];

export type RichIconContextType = {
  size: RichIconSizes;
  backgroundColor: ColorTokens;
  noShape: boolean;
};

export type RichIconSharedProps = GetProps<typeof RichIconFrame>;

export interface RichIconProps extends RichIconSharedProps {
  shape?: RichIconShape | false;
  backdropProps?: GetProps<typeof Path>;
  imageSrc?: string;
  color?: ColorTokens;
}
