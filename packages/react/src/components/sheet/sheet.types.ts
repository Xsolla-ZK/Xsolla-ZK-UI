import type { useSheetProviderProps } from './sheet.hooks';
import type { ComponentsConfig } from '../../utils';
import type { AnimatedNumberStrategy, AnimationProp } from '@tamagui/core';
import type { Scope } from '@tamagui/create-context';
import type { PortalProps } from '@tamagui/portal';
import type { RemoveScroll } from '@tamagui/remove-scroll';
import type { ComponentType, Dispatch, SetStateAction, ReactNode, ComponentProps } from 'react';

export type SheetSizes = keyof ComponentsConfig['modal'] | (string & {});

export type SheetScopedProps<P> = P & { __scopeSheet?: Scope };

export type SheetContextValue = ReturnType<typeof useSheetProviderProps> & {
  scrollEnabled: boolean;
  setHasScrollView: (val: boolean) => void;
};

export type SheetControllerContextValue = {
  disableDrag?: boolean;
  open?: boolean;
  // hide without "closing" to prevent re-animation when shown again
  hidden?: boolean;
  onOpenChange?: Dispatch<SetStateAction<boolean>> | ((val: boolean) => void);
};

export type SheetProps = SheetScopedProps<{
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: OpenChangeHandler;
  position?: number;
  defaultPosition?: number;
  snapPoints?: Array<string | number>;
  snapPointsMode?: SnapPointsMode;
  onPositionChange?: PositionChangeHandler;
  children?: ReactNode;
  dismissOnOverlayPress?: boolean;
  dismissOnSnapToBottom?: boolean;
  forceRemoveScrollEnabled?: boolean;
  animationConfig?: AnimatedNumberStrategy;

  /**
   * (experimental) Remove the children while hidden (to save some performance, but can cause issues with animations)
   */
  unmountChildrenWhenHidden?: boolean;

  /**
   * Adapts the sheet to use native sheet on the given platform (if available)
   */
  native?: Array<'ios'> | boolean;

  /**
   * Pass if you're using the CSS animation driver
   */
  animation?: AnimationProp;
  handleDisableScroll?: boolean;
  disableDrag?: boolean;
  modal?: boolean;
  zIndex?: number;
  portalProps?: PortalProps;
  /**
   * Native-only flag that will make the sheet move up when the mobile keyboard opens so the focused input remains visible
   */
  moveOnKeyboardChange?: boolean;
  containerComponent?: ComponentType;
}>;

export type PositionChangeHandler = (position: number) => void;

type OpenChangeHandler = ((open: boolean) => void) | Dispatch<SetStateAction<boolean>>;

export type RemoveScrollProps = ComponentProps<typeof RemoveScroll>;

export type SnapPointsMode = 'percent' | 'constant' | 'fit' | 'mixed';

export type ScrollBridge = {
  enabled: boolean;
  y: number;
  paneY: number;
  paneMinY: number;
  scrollStartY: number;
  drag: (dy: number) => void;
  release: (state: { dragAt: number; vy: number }) => void;
  scrollLock: boolean;
  onFinishAnimate?: () => void;
};
