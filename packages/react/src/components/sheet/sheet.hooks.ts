import { useConfiguration } from '@tamagui/core';
import { useConstant } from '@tamagui/use-constant';
import { useControllableState } from '@tamagui/use-controllable-state';
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { SheetControllerContext } from './sheet.context';
import type { ScrollBridge, SheetContextValue, SheetProps } from './sheet.types';
import type { TamaguiElement } from '@tamagui/core';
import type { View } from 'react-native';

export const useSheetController = () => {
  const controller = useContext(SheetControllerContext);
  const isHidden = controller?.hidden;
  const isShowingNonSheet = isHidden && controller?.open;
  return {
    controller,
    isHidden,
    isShowingNonSheet,
    disableDrag: controller?.disableDrag,
  };
};

export const useSheetOpenState = (props: SheetProps) => {
  const { isHidden, controller } = useSheetController();

  const onOpenChangeInternal = (val: boolean) => {
    controller?.onOpenChange?.(val);
    props.onOpenChange?.(val);
  };

  const [open, setOpen] = useControllableState({
    prop: controller?.open ?? props.open,
    defaultProp: props.defaultOpen ?? false,
    onChange: onOpenChangeInternal,
    strategy: 'most-recent-wins',
    transition: true,
  });

  return {
    open,
    setOpen,
    isHidden,
    controller,
  };
};

export function useSheetProviderProps(
  props: SheetProps,
  state: ReturnType<typeof useSheetOpenState>,
  options: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onOverlayComponent?: (comp: any) => void;
  } = {},
) {
  const handleRef = useRef<TamaguiElement>(null);
  const contentRef = useRef<View>(null);
  const [frameSize, setFrameSize] = useState<number>(0);
  const [maxContentSize, setMaxContentSize] = useState<number>(0);
  const snapPointsMode = props.snapPointsMode ?? 'percent';
  const snapPointsProp: Array<string | number> =
    props.snapPoints ??
    (snapPointsMode === 'percent' ? [80] : snapPointsMode === 'constant' ? [256] : ['fit']);
  const hasFit = snapPointsProp[0] === 'fit';

  const snapPoints = useMemo(
    () => (props.dismissOnSnapToBottom ? [...snapPointsProp, 0] : snapPointsProp),

    [JSON.stringify(snapPointsProp), props.dismissOnSnapToBottom],
  );

  // lets set -1 to be always the "open = false" position
  const [position_, setPositionImmediate] = useControllableState({
    prop: props.position,
    defaultProp: props.defaultPosition || (state.open ? 0 : -1),
    onChange: props.onPositionChange,
    strategy: 'most-recent-wins',
    transition: true,
  });

  const position = state.open === false ? -1 : position_;

  const { open } = state;

  const setPosition = useCallback(
    (next: number) => {
      // close on dismissOnSnapToBottom (and set position so it animates)
      if (props.dismissOnSnapToBottom && next === snapPoints.length - 1) {
        state.setOpen(false);
      } else {
        setPositionImmediate(next);
      }
    },
    [props.dismissOnSnapToBottom, snapPoints.length, setPositionImmediate, state.setOpen],
  );

  if (process.env.NODE_ENV === 'development') {
    if (
      snapPointsMode === 'mixed' &&
      snapPoints.some((p) => {
        if (typeof p === 'string') {
          if (p === 'fit') {
            return false;
          }
          if (p.endsWith('%')) {
            const n = Number(p.slice(0, -1));
            return n < 0 || n > 100;
          }
          return true;
        }
        return typeof p !== 'number' || p < 0;
      })
    ) {
      console.warn(
        '⚠️ Invalid snapPoint given, snapPoints must be positive numeric values, string percentages between 0-100%, or "fit" when snapPointsMode is mixed',
      );
    }
    if (snapPointsMode === 'mixed' && snapPoints.indexOf('fit') > 0) {
      console.warn(
        '⚠️ Invalid snapPoint given, "fit" must be the first/largest snap point when snapPointsMode is mixed',
      );
    }
    if (
      snapPointsMode === 'fit' &&
      (snapPoints.length !== (props.dismissOnSnapToBottom ? 2 : 1) || snapPoints[0] !== 'fit')
    ) {
      console.warn(
        '⚠️ Invalid snapPoint given, there are no snap points when snapPointsMode is fit',
      );
    }
    if (snapPointsMode === 'constant' && snapPoints.some((p) => typeof p !== 'number' || p < 0)) {
      console.warn(
        '⚠️ Invalid snapPoint given, snapPoints must be positive numeric values when snapPointsMode is constant',
      );
    }
    if (
      snapPointsMode === 'percent' &&
      snapPoints.some((p) => typeof p !== 'number' || p < 0 || p > 100)
    ) {
      console.warn(
        '⚠️ Invalid snapPoint given, snapPoints must be numeric values between 0 and 100 when snapPointsMode is percent',
      );
    }
  }

  // reset position to fully open on re-open after dismissOnSnapToBottom
  if (open && props.dismissOnSnapToBottom && position === snapPoints.length - 1) {
    setPositionImmediate(0);
  }

  // open must set position
  const shouldSetPositionOpen = open && position < 0;
  useEffect(() => {
    if (shouldSetPositionOpen) {
      setPosition(0);
    }
  }, [setPosition, shouldSetPositionOpen]);

  const { animationDriver } = useConfiguration();
  if (!animationDriver) {
    throw new Error(
      process.env.NODE_ENV === 'production' ? `❌ 008` : 'Must set animations in tamagui.config.ts',
    );
  }

  const scrollBridge = useConstant<ScrollBridge>(() => ({
    enabled: false,
    y: 0,
    paneY: 0,
    paneMinY: 0,
    scrollStartY: -1,
    drag: () => {},
    release: () => {},
    scrollLock: false,
  }));

  const removeScrollEnabled = props.forceRemoveScrollEnabled ?? (open && props.modal);

  const maxSnapPoint = snapPoints[0];
  const screenSize =
    snapPointsMode === 'percent'
      ? frameSize / ((typeof maxSnapPoint === 'number' ? maxSnapPoint : 100) / 100)
      : maxContentSize;

  const providerProps = {
    screenSize,
    maxSnapPoint,
    removeScrollEnabled,
    scrollBridge,
    modal: !!props.modal,
    open: state.open,
    setOpen: state.setOpen,
    hidden: !!state.isHidden,
    contentRef,
    handleRef,
    frameSize,
    setFrameSize,
    dismissOnOverlayPress: props.dismissOnOverlayPress ?? true,
    dismissOnSnapToBottom: props.dismissOnSnapToBottom ?? false,
    onOverlayComponent: options.onOverlayComponent,
    scope: props.__scopeSheet,
    hasFit,
    position,
    snapPoints,
    snapPointsMode,
    setMaxContentSize,
    setPosition,
    setPositionImmediate,
    onlyShowFrame: false,
  };

  return providerProps;
}

export const useSheetOffscreenSize = ({
  snapPoints,
  position,
  screenSize,
  frameSize,
  snapPointsMode,
}: SheetContextValue) => {
  if (snapPointsMode === 'fit') {
    return 0;
  }

  if (snapPointsMode === 'constant') {
    const maxSize = Number(snapPoints[0]);
    const currentSize = Number(snapPoints[position] ?? 0);
    const offscreenSize = maxSize - currentSize;
    return offscreenSize;
  }

  if (snapPointsMode === 'percent') {
    const maxPercentOpened = Number(snapPoints[0]) / 100;
    const percentOpened = Number(snapPoints[position] ?? 0) / 100;
    const percentHidden = maxPercentOpened - percentOpened;
    const offscreenSize = percentHidden * screenSize;
    return offscreenSize;
  }

  // mixed:
  const maxSnapPoint = snapPoints[0];
  if (maxSnapPoint === 'fit') {
    return 0;
  }

  const maxSize =
    typeof maxSnapPoint === 'string'
      ? (Number(maxSnapPoint.slice(0, -1)) / 100) * screenSize
      : maxSnapPoint;
  const currentSnapPoint = snapPoints[position] ?? 0;
  const currentSize =
    typeof currentSnapPoint === 'string'
      ? (Number(currentSnapPoint.slice(0, -1)) / 100) * screenSize
      : currentSnapPoint;
  const offscreenSize = maxSize - currentSize;
  if (Number.isNaN(offscreenSize)) {
    return 0;
  }
  return offscreenSize;
};
