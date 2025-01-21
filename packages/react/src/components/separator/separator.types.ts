import type { XZKUICustomColor } from '@xsolla-zk-ui/react/types/theme';
import type { ComponentProps } from 'react';

export interface XZKUISeparatorBaseProps {
  color?: XZKUICustomColor;
  weight: number;
}

export interface XZKUISeparatorProps
  extends Omit<ComponentProps<'hr'>, keyof XZKUISeparatorBaseProps>,
    Partial<XZKUISeparatorBaseProps> {
  vertical?: boolean;
  /** margin-top */
  mt?: number | string;
  /** margin-bottom */
  mb?: number | string;
  /** margin-left */
  ml?: number | string;
  /** margin-right */
  mr?: number | string;
  /** margin-horizontal */
  mx?: number | string;
  /** margin-vertical */
  my?: number | string;
}
