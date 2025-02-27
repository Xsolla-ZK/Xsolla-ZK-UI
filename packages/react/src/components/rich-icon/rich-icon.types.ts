import type { richIconPaths } from './rich-icon.styled';
import type { richIconThemeSizes } from './rich-icon.theme';
import type { PimpleProps } from '../pimple/pimple.types';
import type { ElementType, SVGAttributes } from 'react';

export type RichIconShape = keyof typeof richIconPaths;

type Sizes = (typeof richIconThemeSizes)[number];
export interface RichIconProps {
  shape?: RichIconShape | false;
  backdropProps?: SVGAttributes<SVGPathElement>;
  imageSrc?: string;
  pimple?: Omit<PimpleProps, 'size'>;
  component?: ElementType;
}

export type ComponentRichIconTypeMap<P = object, D extends ElementType = 'div'> = {
  props: P & RichIconProps;
  defaultComponent: D;
};
