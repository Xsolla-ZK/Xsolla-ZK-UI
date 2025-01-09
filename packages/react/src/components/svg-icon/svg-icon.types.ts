import type { PickByDotNotation } from '@xsolla-zk-ui/react/types/helpers';
import type { XZKUITheme } from '@xsolla-zk-ui/react/types/theme';
import type {
  ElementType,
  ForwardRefExoticComponent,
  MemoExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  SVGProps,
} from 'react';

export type XZKUISvgIconColorUnion = keyof PickByDotNotation<XZKUITheme, 'theme.content'>;

export interface XZKUISvgIconBaseProps {
  size?: number;
  color?: XZKUISvgIconColorUnion;
}

export interface XZKUISvgIconProps<T extends ElementType = 'span'>
  extends Omit<SVGProps<SVGSVGElement>, 'ref' | keyof XZKUISvgIconBaseProps>,
    XZKUISvgIconBaseProps {
  icon: MemoExoticComponent<
    ForwardRefExoticComponent<
      PropsWithoutRef<SVGProps<SVGSVGElement>> & RefAttributes<SVGSVGElement>
    >
  >;
  component?: T;
}
