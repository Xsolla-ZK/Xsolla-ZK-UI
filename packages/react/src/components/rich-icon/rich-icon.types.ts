import type { richIconPaths } from './rich-icon.styled';
import type { richIconThemeSizes } from './rich-icon.theme';
import type { XZKUIPimpleProps } from '../pimple/pimple.types';
import type { Theme } from '@emotion/react';
import type { PickByDotNotation } from '@xsolla-zk-ui/react/types/helpers';
import type { ComponentPropsWithoutRef, ElementType, SVGAttributes } from 'react';

export type XZKUIRichIconShape = keyof typeof richIconPaths;

export type XZKUISvgIconBgUnion = keyof PickByDotNotation<Theme, 'theme.background'>;

type Sizes = (typeof richIconThemeSizes)[number];
export interface XZKUIRichIconBaseProps {
  shape?: XZKUIRichIconShape | false;
  size: Sizes;
  bg: XZKUISvgIconBgUnion;
  backdropProps?: SVGAttributes<SVGPathElement>;
}

export type XZKUIRichIconProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> &
  Partial<XZKUIRichIconBaseProps> & {
    imageSrc?: string;
    pimple?: XZKUIPimpleProps;
    component?: T;
  };
