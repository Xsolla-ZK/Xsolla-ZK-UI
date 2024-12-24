import type { richIconPaths } from './rich-icon.styled';
import type { ComponentPropsWithoutRef, ElementType, SVGAttributes } from 'react';

export type XZKUIRichIconShape = keyof typeof richIconPaths;

export interface XZKUIRichIconBaseProps {
  shape?: XZKUIRichIconShape;
  size?: number;
  backdropProps?: SVGAttributes<SVGPathElement>;
}

export type XZKUIRichIconProps<T extends ElementType = 'div'> = ComponentPropsWithoutRef<T> &
  XZKUIRichIconBaseProps & {
    as?: T;
  };
