/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-lines */
import { ProvideAdaptContext, useAdaptContext } from '@tamagui/adapt';
import { AnimatePresence } from '@tamagui/animate-presence';
import {
  currentPlatform,
  isClient,
  isWeb,
  Stack,
  Theme,
  useComposedRefs,
  useConfiguration,
  useDidFinishSSR,
  useEvent,
  useIsomorphicLayoutEffect,
  useThemeName,
} from '@tamagui/core';
import { Portal, USE_NATIVE_PORTAL } from '@tamagui/portal';
import {
  forwardRef,
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Dimensions, Keyboard, PanResponder, View } from 'react-native';
import { ParentSheetContext, SheetInsideSheetContext, SheetProvider } from './sheet.context';
import { useSheetOpenState, useSheetProviderProps } from './sheet.hooks';
import type { SheetProps, SnapPointsMode } from './sheet.types';
import type { TamaguiElement } from '@tamagui/core';
import type { RefObject } from 'react';
import type {
  Animated,
  GestureResponderEvent,
  LayoutChangeEvent,
  PanResponderGestureState,
} from 'react-native';

const hiddenSize = 10_000.1;

let sheetHiddenStyleSheet: HTMLStyleElement | null = null;

// on web we are always relative to window, on to screen
const relativeDimensionTo = isWeb ? 'window' : 'screen';

export const SheetImplCustom = forwardRef<View, SheetProps>(
  function SheetImplementationCustom(props, forwardedRef) {
    const parentSheet = useContext(ParentSheetContext);

    const {
      animation,
      animationConfig: animationConfigProp,
      modal = false,
      zIndex = parentSheet.zIndex + 1,
      moveOnKeyboardChange = false,
      unmountChildrenWhenHidden = false,
      portalProps,
      containerComponent: ContainerComponent = Fragment,
    } = props;

    const state = useSheetOpenState(props);
    const [overlayComponent, setOverlayComponent] = useState(null);

    const providerProps = useSheetProviderProps(props, state, {
      onOverlayComponent: setOverlayComponent,
    });
    const {
      frameSize,
      setFrameSize,
      snapPoints,
      snapPointsMode,
      hasFit,
      position,
      setPosition,
      scrollBridge,
      screenSize,
      setMaxContentSize,
      maxSnapPoint,
    } = providerProps;
    const { open, controller, isHidden } = state;

    const sheetRef = useRef<View>(null);
    const ref = useComposedRefs(forwardedRef, sheetRef, providerProps.contentRef);

    const { animationDriver } = useConfiguration();
    const animationConfig = (() => {
      if (animationDriver.supportsCSSVars) {
        // for now this detects css driver only, which has no "config"
        return {};
      }

      const [animationProp, animationPropConfig] = !animation
        ? []
        : Array.isArray(animation)
          ? animation
          : ([animation] as const);
      return (
        animationConfigProp ??
        (animationProp
          ? {
              ...(animationDriver.animations[animationProp as string] as object),
              ...animationPropConfig,
            }
          : null)
      );
    })();

    /**
     * This is a hacky workaround for native:
     */
    const [isShowingInnerSheet, setIsShowingInnerSheet] = useState(false);
    const shouldHideParentSheet =
      !isWeb &&
      modal &&
      isShowingInnerSheet &&
      // if not using weird portal limitation we dont need to hide parent sheet
      USE_NATIVE_PORTAL;

    const sheetInsideSheet = useContext(SheetInsideSheetContext);
    const onInnerSheet = useCallback((hasChild: boolean) => {
      setIsShowingInnerSheet(hasChild);
    }, []);

    const positions = useMemo(
      () => snapPoints.map((point) => getYPositions(snapPointsMode, point, screenSize, frameSize)),
      [screenSize, frameSize, snapPoints, snapPointsMode],
    );

    const { useAnimatedNumber, useAnimatedNumberStyle, useAnimatedNumberReaction } =
      animationDriver;
    const AnimatedView = (animationDriver.View ?? Stack) as typeof Animated.View;

    useIsomorphicLayoutEffect(() => {
      if (!(sheetInsideSheet && open)) return;
      sheetInsideSheet(true);
      return () => {
        sheetInsideSheet(false);
      };
    }, [sheetInsideSheet, open]);

    const nextParentContext = useMemo(
      () => ({
        zIndex,
      }),
      [zIndex],
    );

    const isMounted = useDidFinishSSR();
    const startPosition = isMounted && screenSize ? screenSize : hiddenSize;
    const animatedNumber = useAnimatedNumber(startPosition);
    const at = useRef(startPosition);
    const hasntMeasured = at.current === hiddenSize;
    const [disableAnimation, setDisableAnimation] = useState(hasntMeasured);

    const hasScrollView = useRef(false);

    useAnimatedNumberReaction(
      {
        value: animatedNumber,
        hostRef: sheetRef as RefObject<TamaguiElement>,
      },
      useCallback(
        (value) => {
          at.current = value;
          scrollBridge.paneY = value;
        },
        [animationDriver],
      ),
    );

    function stopSpring() {
      animatedNumber.stop();
      if (scrollBridge.onFinishAnimate) {
        scrollBridge.onFinishAnimate();
        scrollBridge.onFinishAnimate = undefined;
      }
    }

    const animateTo = useEvent((position: number) => {
      if (frameSize === 0) return;

      const toValue = isHidden || position === -1 ? screenSize : positions[position];

      if (at.current === toValue) return;

      at.current = toValue;
      stopSpring();
      animatedNumber.setValue(toValue, {
        type: 'spring',
        ...animationConfig,
      });
    });

    useIsomorphicLayoutEffect(() => {
      // we need to do a *three* step process for the css driver
      // first render off screen for ssr safety (hiddenSize)
      // then render to bottom of screen without animation (screenSize)
      // then add the animation as it animates from screenSize to position

      if (hasntMeasured && screenSize) {
        at.current = screenSize;
        animatedNumber.setValue(
          screenSize,
          {
            type: 'timing',
            duration: 0,
          },
          () => {
            // imperfect but struggling to render properly here
            setTimeout(() => {
              setDisableAnimation(false);
            }, 10);
          },
        );
        return;
      }

      if (disableAnimation) {
        return;
      }

      if (!frameSize || !screenSize || isHidden || (hasntMeasured && !open)) {
        return;
      }

      // finally, animate
      animateTo(position);
    }, [hasntMeasured, disableAnimation, isHidden, frameSize, screenSize, open, position]);

    const disableDrag = props.disableDrag ?? controller?.disableDrag;
    const themeName = useThemeName();
    const [isDragging, setIsDragging] = useState(false);
    const scrollEnabled = useRef(true);

    const setScrollEnabled = useCallback((val: boolean) => {
      scrollEnabled.current = val;
    }, []);

    const panResponder = useMemo(() => {
      if (disableDrag) return;
      if (!frameSize) return;
      if (isShowingInnerSheet) return;

      const minY = positions[0];
      scrollBridge.paneMinY = minY;
      let startY = at.current;

      function setPanning(val: boolean) {
        setIsDragging(val);

        // make unselectable:
        if (isClient) {
          if (!sheetHiddenStyleSheet) {
            sheetHiddenStyleSheet = document.createElement('style');
            if (typeof document.head !== 'undefined') {
              document.head.appendChild(sheetHiddenStyleSheet);
            }
          }
          if (!val) {
            sheetHiddenStyleSheet.innerText = '';
          } else {
            sheetHiddenStyleSheet.innerText =
              ':root * { user-select: none !important; -webkit-user-select: none !important; }';
          }
        }
      }

      let isExternalDrag = false;
      let previouslyScrolling = false;

      const release = ({ vy, dragAt }: { dragAt: number; vy: number }) => {
        isExternalDrag = false;
        previouslyScrolling = false;
        setPanning(false);
        const at = dragAt + startY;
        // seems liky vy goes up to about 4 at the very most (+ is down, - is up)
        // lets base our multiplier on the total layout height
        const end = at + frameSize * vy * 0.2;
        let closestPoint = 0;
        let dist = Number.POSITIVE_INFINITY;
        for (let i = 0; i < positions.length; i++) {
          const position = positions[i];
          const curDist = end > position ? end - position : position - end;
          if (curDist < dist) {
            dist = curDist;
            closestPoint = i;
          }
        }
        // have to call both because state may not change but need to snap back
        setPosition(closestPoint);
        animateTo(closestPoint);
        setScrollEnabled(closestPoint === 0 && dragAt <= 0);
      };

      const finish = (_e: GestureResponderEvent, state: PanResponderGestureState) => {
        release({
          vy: state.vy,
          dragAt: state.dy,
        });
      };

      const onMoveShouldSet = (e: GestureResponderEvent, { dy }: PanResponderGestureState) => {
        // if dragging handle always allow:
        if (e.target === providerProps.handleRef.current || !scrollEnabled.current) {
          return true;
        }

        const isScrolled = scrollBridge.y !== 0;

        // Update the dragging direction
        const isDraggingUp = dy < 0;

        // we can treat near top instead of exactly to avoid trouble with springs
        const isNearTop = scrollBridge.paneY - 5 <= scrollBridge.paneMinY;
        if (isScrolled) {
          previouslyScrolling = true;
          return false;
        }
        // prevent drag once at top and pulling up
        if (isNearTop) {
          if (scrollEnabled.current && hasScrollView.current && isDraggingUp) {
            return false;
          }
        }
        // we could do some detection of other touchables and cancel here..
        return Math.abs(dy) > 10;
      };

      const grant = () => {
        setScrollEnabled(false);
        setPanning(true);
        stopSpring();
        startY = at.current;
      };

      isExternalDrag = false;

      scrollBridge.drag = (dy) => {
        if (!isExternalDrag) {
          isExternalDrag = true;
          grant();
        }
        const to = dy + startY;
        animatedNumber.setValue(resisted(to, minY), { type: 'direct' });
      };

      scrollBridge.release = release;

      return PanResponder.create({
        onMoveShouldSetPanResponder: onMoveShouldSet,
        onPanResponderGrant: grant,
        onPanResponderMove: (_e, { dy }) => {
          const toFull = dy + startY;
          const to = resisted(toFull, minY);
          animatedNumber.setValue(to, { type: 'direct' });
        },
        onPanResponderEnd: finish,
        onPanResponderTerminate: finish,
        onPanResponderRelease: finish,
      });
    }, [disableDrag, isShowingInnerSheet, animateTo, frameSize, positions, setPosition]);

    const handleAnimationViewLayout = useCallback((e: LayoutChangeEvent) => {
      // avoid bugs where it grows forever for whatever reason
      const next = Math.min(
        e.nativeEvent?.layout.height,
        Dimensions.get(relativeDimensionTo).height,
      );
      if (!next) return;
      setFrameSize(next);
    }, []);

    const handleMaxContentViewLayout = useCallback((e: LayoutChangeEvent) => {
      // avoid bugs where it grows forever for whatever reason
      const next = Math.min(
        e.nativeEvent?.layout.height,
        Dimensions.get(relativeDimensionTo).height,
      );
      if (!next) return;
      setMaxContentSize(next);
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const animatedStyle = useAnimatedNumberStyle(animatedNumber, (val) => {
      'worklet';
      return {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        transform: [{ translateY: frameSize === 0 ? hiddenSize : val }],
      };
    });

    const sizeBeforeKeyboard = useRef<number | null>(null);
    useEffect(() => {
      if (isWeb || !moveOnKeyboardChange) return;
      const keyboardShowListener = Keyboard.addListener(
        currentPlatform === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
        (e) => {
          if (sizeBeforeKeyboard.current !== null) return;
          sizeBeforeKeyboard.current =
            isHidden || position === -1 ? screenSize : positions[position];
          animatedNumber.setValue(
            Math.max(sizeBeforeKeyboard.current - e.endCoordinates.height, 0),
            {
              type: 'timing',
              duration: 250,
            },
          );
        },
      );
      const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
        if (sizeBeforeKeyboard.current === null) return;
        animatedNumber.setValue(sizeBeforeKeyboard.current, {
          type: 'timing',
          duration: 250,
        });
        sizeBeforeKeyboard.current = null;
      });

      return () => {
        keyboardDidHideListener.remove();
        keyboardShowListener.remove();
      };
    }, [moveOnKeyboardChange, positions, position, isHidden]);

    // we need to set this *after* fully closed to 0, to avoid it overlapping
    // the page when resizing quickly on web for example
    const [opacity, setOpacity] = useState(open ? 1 : 0);
    if (open && opacity === 0) {
      setOpacity(1);
    }
    useEffect(() => {
      if (!open) {
        // need to wait for animation complete, for now lets just do it naively
        const tm = setTimeout(() => {
          setOpacity(0);
        }, 400);
        return () => {
          clearTimeout(tm);
        };
      }
    }, [open]);

    const forcedContentHeight = hasFit
      ? undefined
      : snapPointsMode === 'percent'
        ? `${maxSnapPoint}${isWeb ? 'dvh' : '%'}`
        : maxSnapPoint;

    const setHasScrollView = useCallback((val: boolean) => {
      hasScrollView.current = val;
    }, []);
    // const id = useId()
    // const { AdaptProvider, when, children } = useAdaptParent({
    //   scope: `${id}Sheet`,
    //   portal: true,
    // })

    let contents = (
      <ParentSheetContext.Provider value={nextParentContext}>
        <SheetProvider
          {...providerProps}
          scrollEnabled={scrollEnabled.current}
          setHasScrollView={setHasScrollView}
        >
          <AnimatePresence custom={{ open }}>
            {shouldHideParentSheet || !open ? null : overlayComponent}
          </AnimatePresence>

          {snapPointsMode !== 'percent' && (
            <View
              style={{
                opacity: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
              }}
              onLayout={handleMaxContentViewLayout}
            />
          )}

          <AnimatedView
            {...panResponder?.panHandlers}
            onLayout={handleAnimationViewLayout}
            {...(!isDragging && {
              // @ts-ignore for CSS driver this is necessary to attach the transition
              animation: disableAnimation ? null : animation,
            })}
            // @ts-ignore need for web
            disableClassName
            style={[
              {
                position: 'absolute',
                zIndex,
                width: '100%',
                height: forcedContentHeight,
                minHeight: forcedContentHeight,
                opacity: !shouldHideParentSheet ? opacity : 0,
                ...((shouldHideParentSheet || !open) && {
                  pointerEvents: 'none',
                }),
              },
              animatedStyle,
            ]}
            ref={ref}
          >
            {/* <AdaptProvider>{props.children}</AdaptProvider> */}
            {props.children}
          </AnimatedView>
        </SheetProvider>
      </ParentSheetContext.Provider>
    );

    if (process.env.TAMAGUI_TARGET === 'native' && !USE_NATIVE_PORTAL) {
      const adaptContext = useAdaptContext();
      contents = <ProvideAdaptContext {...adaptContext}>{contents}</ProvideAdaptContext>;
    }

    // start mounted so we get an accurate measurement the first time
    const shouldMountChildren = unmountChildrenWhenHidden ? !!opacity : true;

    if (modal) {
      const modalContents = (
        <Portal stackZIndex={zIndex} {...portalProps}>
          {shouldMountChildren && (
            <ContainerComponent>
              <Theme forceClassName name={themeName}>
                {contents}
              </Theme>
            </ContainerComponent>
          )}
        </Portal>
      );

      if (isWeb) {
        return modalContents;
      }

      // on native we don't support multiple modals yet... fix for now is to hide outer one
      return (
        <SheetInsideSheetContext.Provider value={onInnerSheet}>
          {modalContents}
        </SheetInsideSheetContext.Provider>
      );
    }

    return contents;
  },
);

function getYPositions(
  mode: SnapPointsMode,
  point: string | number,
  screenSize?: number,
  frameSize?: number,
) {
  if (!screenSize || !frameSize) return 0;

  if (mode === 'mixed') {
    if (typeof point === 'number') {
      return screenSize - Math.min(screenSize, Math.max(0, point));
    }
    if (point === 'fit') {
      return screenSize - Math.min(screenSize, frameSize);
    }
    if (point.endsWith('%')) {
      const pct = Math.min(100, Math.max(0, Number(point.slice(0, -1)))) / 100;
      if (Number.isNaN(pct)) {
        console.warn('Invalid snapPoint percentage string');
        return 0;
      }
      const next = Math.round(screenSize - pct * screenSize);
      return next;
    }
    console.warn('Invalid snapPoint unknown value');
    return 0;
  }

  if (mode === 'fit') {
    if (point === 0) return screenSize;
    return screenSize - Math.min(screenSize, frameSize);
  }

  if (mode === 'constant' && typeof point === 'number') {
    return screenSize - Math.min(screenSize, Math.max(0, point));
  }

  const pct = Math.min(100, Math.max(0, Number(point))) / 100;
  if (Number.isNaN(pct)) {
    console.warn('Invalid snapPoint percentage');
    return 0;
  }

  return Math.round(screenSize - pct * screenSize);
}

function resisted(y: number, minY: number, maxOverflow = 25) {
  // If we're not past the boundary, return the original position
  if (y >= minY) {
    return y;
  }

  // Calculate how far we've gone past the boundary
  const pastBoundary = minY - y;

  // Use a square root function for very gentle resistance
  // This creates a milder resistance curve than logarithmic
  // Reduced multiplier from 1.5 to 1.0 for even less resistance
  const resistedDistance = Math.sqrt(pastBoundary) * 2;

  // Return the position with resistance applied
  return minY - resistedDistance;
}
