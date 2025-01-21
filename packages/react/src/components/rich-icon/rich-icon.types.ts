import type { richIconPaths } from './rich-icon.styled';
import type { richIconThemeSizes } from './rich-icon.theme';
import type { XZKUIPimpleProps } from '../pimple/pimple.types';
import type { XZKUICustomColor } from '@xsolla-zk-ui/react/types/theme';
import type { ElementType, SVGAttributes } from 'react';

export type XZKUIRichIconShape = keyof typeof richIconPaths;

type Sizes = (typeof richIconThemeSizes)[number];
export interface XZKUIRichIconBaseProps {
  size: Sizes;
  bg: XZKUICustomColor;
}

export interface XZKUIRichIconProps extends Partial<XZKUIRichIconBaseProps> {
  shape?: XZKUIRichIconShape | false;
  backdropProps?: SVGAttributes<SVGPathElement>;
  imageSrc?: string;
  pimple?: Omit<XZKUIPimpleProps, 'size'>;
  component?: ElementType;
}

export type ComponentRichIconTypeMap<P = object, D extends ElementType = 'div'> = {
  props: P & XZKUIRichIconProps;
  defaultComponent: D;
};
