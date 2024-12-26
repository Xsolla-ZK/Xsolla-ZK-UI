import type { AnimationProps } from '@react-spring/web';
import type { MouseEventHandler, ReactElement } from 'react';

export interface XZKUIAnimatedProps {
  children?: ReactElement;
  in?: boolean;
  from?: Record<string, string | number>;
  to?: Record<string, string | number>;
  settings?: AnimationProps;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onEnter?: (node: HTMLElement | null, isAppearing: boolean) => void;
  onExited?: (node: HTMLElement | null, isAppearing: boolean) => void;
}
