import type { PickByDotNotation } from '@xsolla-zk-ui/react/types/helpers';
import type { XZKUITheme } from '@xsolla-zk-ui/react/types/theme';
import type { ComponentProps } from 'react';

type XZKUISeparatorBorderUnion = keyof PickByDotNotation<XZKUITheme, 'theme.border'>;

export interface XZKUISeparatorBaseProps {
  color: XZKUISeparatorBorderUnion;
  weight: number;
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

export interface XZKUISeparatorProps
  extends Omit<ComponentProps<'hr'>, keyof XZKUISeparatorBaseProps>,
    Partial<XZKUISeparatorBaseProps> {
  vertical?: boolean;
}
