/* forked from @tamagui/popper */
/* https://github.com/tamagui/tamagui/tree/main/code/ui/popper */

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable max-lines */
import { useComposedRefs } from '@tamagui/compose-refs';
import { isWeb, useIsomorphicLayoutEffect } from '@tamagui/constants';
import { Stack, View as TamaguiView } from '@tamagui/core';
import {
  arrow,
  autoUpdate,
  flip,
  offset as offsetFn,
  platform,
  shift,
  size as sizeMiddleware,
  useFloating,
} from '@tamagui/floating';
import { startTransition } from '@tamagui/start-transition';
import { forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import { Keyboard, useWindowDimensions } from 'react-native';
import {
  PopperProviderFast,
  PopperProviderSlow,
  usePopperContext,
  usePopperContextSlow,
} from './popper.context';
import { PopperContentFrame } from './popper.styled';
import type {
  PopperAnchorProps,
  PopperArrowRef,
  PopperContentProps,
  PopperContextSlowValue,
  PopperContextValue,
  PopperProps,
  PopperSetupOptions,
} from './popper.types';
import type { TamaguiElement } from '@tamagui/core';
import type { MiddlewareState } from '@tamagui/floating';
import type { ReactNode } from 'react';

/* -------------------------------------------------------------------------------------------------
 * Popper
 * -----------------------------------------------------------------------------------------------*/

// handles both slow and fast:
export const PopperProvider = ({
  scope,
  children,
  ...context
}: PopperContextValue & { scope?: string; children?: ReactNode }) => {
  const slowContext = getContextSlow(context);

  return (
    <PopperProviderFast scope={scope} {...context}>
      <PopperProviderSlow scope={scope} {...slowContext}>
        {children}
      </PopperProviderSlow>
    </PopperProviderFast>
  );
};

const checkFloating =
  process.env.TAMAGUI_TARGET === 'native'
    ? {
        name: 'checkFloating',
        fn(data: MiddlewareState) {
          return {
            data: {
              hasFloating: !!data.rects.floating.width,
            },
          };
        },
      }
    : undefined;

const setupOptions: PopperSetupOptions = {};

export function setupPopper(options?: PopperSetupOptions) {
  Object.assign(setupOptions, options);
}

export function Popper(props: PopperProps) {
  const {
    children,
    // size,
    strategy = 'absolute',
    placement = 'bottom',
    stayInFrame,
    allowFlip,
    offset,
    disableRTL,
    resize,
    passThrough,
    open,
    scope,
  } = props;

  const [arrowEl, setArrow] = useState<PopperArrowRef | null>(null);
  const [arrowSize, setArrowSize] = useState(0);
  const offsetOptions = offset ?? arrowSize;
  const floatingStyle = useRef({});

  let floating = useFloating({
    open: passThrough ? false : open || true,
    strategy,
    placement,
    sameScrollView: false, // this only takes effect on native
    whileElementsMounted: passThrough || !open ? undefined : autoUpdate,
    platform:
      (disableRTL ?? setupOptions.disableRTL)
        ? {
            ...platform,
            isRTL(element) {
              return false;
            },
          }
        : platform,
    middleware: [
      stayInFrame ? shift(typeof stayInFrame === 'boolean' ? {} : stayInFrame) : null,
      allowFlip ? flip(typeof allowFlip === 'boolean' ? {} : allowFlip) : null,
      arrowEl ? arrow({ element: arrowEl as Element }) : null,
      typeof offsetOptions !== 'undefined' ? offsetFn(offsetOptions) : null,
      checkFloating,
      process.env.TAMAGUI_TARGET !== 'native' && resize
        ? sizeMiddleware({
            apply({ availableHeight, availableWidth }) {
              if (passThrough) {
                return;
              }

              Object.assign(floatingStyle.current, {
                maxHeight: `${availableHeight}px`,
                maxWidth: `${availableWidth}px`,
              });
              // we wrap PopperContent with one container stack so we need to account for it
              const floatingChild = floating.refs.floating.current?.firstChild;
              if (floatingChild && floatingChild instanceof HTMLElement) {
                Object.assign(floatingChild.style, floatingStyle.current);
              }
            },
            ...(typeof resize === 'object' && resize),
          })
        : null,
    ].filter(Boolean),
  });

  if (process.env.TAMAGUI_TARGET !== 'native') {
    // add our size middleware here
    floating = useMemo(() => {
      const og = floating.getFloatingProps;
      if (resize && og) {
        floating.getFloatingProps = (props) =>
          og({
            ...props,
            style: {
              ...props.style,
              ...floatingStyle.current,
            },
          });
      }
      return floating;
    }, [floating, resize ? JSON.stringify(resize) : null]);
  }

  const { middlewareData } = floating;

  if (process.env.TAMAGUI_TARGET === 'native') {
    // On Native there's no autoupdate so we call update() when necessary

    // Subscribe to window dimensions (orientation, scale, etc...)
    const dimensions = useWindowDimensions();

    // Subscribe to keyboard state
    const [keyboardOpen, setKeyboardOpen] = useState(false);
    useEffect(() => {
      const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
        startTransition(() => {
          setKeyboardOpen(true);
        });
      });
      const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
        startTransition(() => {
          setKeyboardOpen(false);
        });
      });

      return () => {
        showSubscription.remove();
        hideSubscription.remove();
      };
    }, []);

    useIsomorphicLayoutEffect(() => {
      if (passThrough) return;
      floating.update();
    }, [passThrough, dimensions, keyboardOpen]);
  }

  // memoize since we round x/y, floating-ui doesn't by default which can cause tons of updates
  // if the floating element is inside something animating with a spring
  const popperContext = useMemo(
    () =>
      ({
        // size,
        arrowRef: setArrow,
        arrowStyle: middlewareData.arrow,
        onArrowSize: setArrowSize,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        hasFloating: middlewareData.checkFloating?.hasFloating,
        ...floating,
      }) satisfies PopperContextValue,
    [
      // size,
      floating.x,
      floating.y,
      floating.placement,
      JSON.stringify(middlewareData.arrow || null),
      floating.isPositioned,
    ],
  );

  return (
    <PopperProvider scope={scope} {...popperContext}>
      {children}
    </PopperProvider>
  );
}

/* -------------------------------------------------------------------------------------------------
 * PopperAnchor
 * -----------------------------------------------------------------------------------------------*/

export const PopperAnchor = Stack.styleable<PopperAnchorProps>(
  function PopperAnchor(props, forwardedRef) {
    const { virtualRef, scope, ...anchorProps } = props;
    const context = usePopperContextSlow(scope);
    const { getReferenceProps, refs, update } = context;
    const ref = useRef<TamaguiElement>(null);

    useEffect(() => {
      if (virtualRef) {
        refs.setReference(virtualRef.current);
      }
    }, [virtualRef]);

    const stackProps = anchorProps;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
    const refProps = getReferenceProps ? getReferenceProps(stackProps as any) : null;
    const shouldHandleInHover = isWeb && scope;
    const composedRefs = useComposedRefs(
      forwardedRef,
      ref,
      // web handles this onMouseEnter below so it can support multiple targets + hovering
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any
      shouldHandleInHover ? undefined : (refs.setReference as any),
    );

    return (
      <TamaguiView
        {...stackProps}
        {...refProps}
        ref={composedRefs}
        {...(shouldHandleInHover && {
          // this helps us with handling scoped poppers with many different targets
          // basically we wait for mouseEnter to ever set a reference and remove it on leave
          // otherwise floating ui gets confused by having >1 reference
          onMouseEnter: (e) => {
            if (ref.current instanceof HTMLElement) {
              refs.setReference(ref.current);
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
              refProps?.onPointerEnter?.(e);
              update();
            }
          },
          onMouseLeave: (e) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            refProps?.onMouseLeave?.(e);
          },
        })}
      />
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * PopperContent
 * -----------------------------------------------------------------------------------------------*/

export const PopperContent = forwardRef<TamaguiElement, PopperContentProps>(
  function PopperContent(props, forwardedRef) {
    const { scope, enableAnimationForPositionChange, children, passThrough, ...rest } = props;
    const { strategy, placement, refs, x, y, getFloatingProps } = usePopperContext(scope);
    const contentRefs = useComposedRefs<TamaguiElement>(refs.setFloating, forwardedRef);

    const [needsMeasure, setNeedsMeasure] = useState(enableAnimationForPositionChange);

    useIsomorphicLayoutEffect(() => {
      if (needsMeasure && x && y) {
        setNeedsMeasure(false);
      }
    }, [needsMeasure, enableAnimationForPositionChange, x, y]);

    // default to not showing if positioned at 0, 0
    const hide = x === 0 && y === 0;

    const frameProps = {
      ref: contentRefs,
      x: x || 0,
      y: y || 0,
      top: 0,
      left: 0,
      position: strategy,
      opacity: 1,
      ...(enableAnimationForPositionChange && {
        animation: rest.animation,
        animateOnly: needsMeasure ? [] : rest.animateOnly,
        // apply animation but disable it on initial render to avoid animating from 0 to the first position
        animatePresence: false,
      }),
      ...(hide && {
        opacity: 0,
        animateOnly: [],
      }),
    };

    // outer frame because we explicitly don't want animation to apply to this

    const { style, ...floatingProps } = getFloatingProps
      ? getFloatingProps(frameProps)
      : frameProps;

    return (
      <TamaguiView
        passThrough={passThrough}
        ref={contentRefs}
        contain="layout style"
        {...(passThrough ? null : floatingProps)}
      >
        <PopperContentFrame
          key="popper-content-frame"
          passThrough={passThrough}
          {...(!passThrough && {
            'data-placement': placement,
            'data-strategy': strategy,
            // size,
            ...style,
            ...rest,
          })}
        >
          {children}
        </PopperContentFrame>
      </TamaguiView>
    );
  },
);

/* -------------------------------------------------------------------------------------------------
 * PopperArrow
 * -----------------------------------------------------------------------------------------------*/

// const opposites = {
//   top: 'bottom',
//   right: 'left',
//   bottom: 'top',
//   left: 'right',
// } as const;

// type Sides = keyof typeof opposites;

// export const PopperArrow = forwardRef<PopperArrowRef, PopperArrowProps>(
//   function PopperArrow(propsIn, forwardedRef) {
//     const { scope, ...rest } = propsIn;
//     const props = useProps(rest);
//     const { offset, size: sizeProp, borderWidth = 0, ...arrowProps } = props;

//     const context = usePopperContext(scope);
//     const sizeVal =
//       (typeof sizeProp === 'number' ? sizeProp : getVariableValue(sizeProp ?? context.size)) ?? 12;

//     const size = Math.max(0, +sizeVal);

//     const { placement } = context;
//     const refs = useComposedRefs(context.arrowRef, forwardedRef);

//     // Sometimes floating-ui can return NaN during orientation or screen size changes on native
//     // so we explicitly force the x,y position types as a number
//     const x = (context.arrowStyle?.x as number) || 0;
//     const y = (context.arrowStyle?.y as number) || 0;

//     const primaryPlacement = (placement ? placement.split('-')[0] : 'top') as Sides;

//     const arrowStyle: StackProps = { x, y, width: size, height: size };

//     const innerArrowStyle: StackProps = {};
//     const isVertical = primaryPlacement === 'bottom' || primaryPlacement === 'top';

//     if (primaryPlacement) {
//       // allows for extra diagonal size
//       arrowStyle[isVertical ? 'width' : 'height'] = size * 2;
//       const oppSide = opposites[primaryPlacement];
//       if (oppSide) {
//         arrowStyle[oppSide as keyof StackProps] = -size;
//         innerArrowStyle[oppSide as keyof StackProps] = size / 2;
//       }
//       if (oppSide === 'top' || oppSide === 'bottom') {
//         arrowStyle.left = 0;
//       }
//       if (oppSide === 'left' || oppSide === 'right') {
//         arrowStyle.top = 0;
//       }

//       // send the Arrow's offset up to Popper
//       useIsomorphicLayoutEffect(() => {
//         context.onArrowSize?.(size);
//       }, [size, context.onArrowSize]);
//     }

//     // outer frame to cut off for ability to have nicer shadows/borders
//     return (
//       <PopperArrowOuterFrame ref={refs} {...arrowStyle}>
//         <PopperArrowFrame
//           width={size}
//           height={size}
//           {...arrowProps}
//           {...innerArrowStyle}
//           rotate="45deg"
//           {...(primaryPlacement === 'bottom' && {
//             borderLeftWidth: borderWidth,
//             borderTopWidth: borderWidth,
//           })}
//           {...(primaryPlacement === 'top' && {
//             borderBottomWidth: borderWidth,
//             borderRightWidth: borderWidth,
//           })}
//           {...(primaryPlacement === 'right' && {
//             borderLeftWidth: borderWidth,
//             borderBottomWidth: borderWidth,
//           })}
//           {...(primaryPlacement === 'left' && {
//             borderTopWidth: borderWidth,
//             borderRightWidth: borderWidth,
//           })}
//         />
//       </PopperArrowOuterFrame>
//     );
//   },
// );

// avoid position based re-rendering
function getContextSlow(context: PopperContextValue): PopperContextSlowValue {
  return {
    refs: context.refs,
    // size: context.size,
    arrowRef: context.arrowRef,
    arrowStyle: context.arrowStyle,
    onArrowSize: context.onArrowSize,
    hasFloating: context.hasFloating,
    strategy: context.strategy,
    update: context.update,
    context: context.context,
    getFloatingProps: context.getFloatingProps,
    getReferenceProps: context.getReferenceProps,
  };
}
