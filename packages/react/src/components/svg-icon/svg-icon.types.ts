import type { XZKUICustomColor } from '@xsolla-zk-ui/react/types/theme';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardRefExoticComponent,
  MemoExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  SVGProps,
} from 'react';

export interface XZKUISvgIconBaseProps {
  size?: number;
  color?: XZKUICustomColor;
}

export interface XZKUISvgIconProps<T extends ElementType = 'span'>
  extends Omit<ComponentPropsWithoutRef<'svg'>, keyof XZKUISvgIconBaseProps>,
    Partial<XZKUISvgIconBaseProps> {
  icon: MemoExoticComponent<
    ForwardRefExoticComponent<
      PropsWithoutRef<SVGProps<SVGSVGElement>> & RefAttributes<SVGSVGElement>
    >
  >;
  component?: T;
}
