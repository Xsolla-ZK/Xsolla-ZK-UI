/* forked from @tamagui/slider */
/* https://github.com/tamagui/tamagui/blob/main/code/ui/slider/src/Slider.tsx */

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable max-lines */
import {
  clamp,
  composeEventHandlers,
  composeRefs,
  useCreateShallowSetState,
  isClient,
  isWeb,
  useComposedRefs,
  withStaticProperties,
} from '@tamagui/core';
import { useControllableState } from '@tamagui/use-controllable-state';
import { useDirection } from '@tamagui/use-direction';
import { ARROW_KEYS, BACK_KEYS, PAGE_KEYS } from '@xsolla-zk/constants';
import { getSafeTokenValue } from '@xsolla-zk/ui-utils';
import { forwardRef, useEffect, useRef, useState } from 'react';
import { useStyledMediaContext } from '../../hooks';
import { getComponentsConfig, getMappedStyles } from '../../utils';
import {
  SliderContext,
  SliderFrame,
  SliderKnobFrame,
  SliderOrientationProvider,
  SliderTrackActiveFrame,
  SliderTrackFrame,
  useSliderOrientationContext,
} from './slider.styled';
import {
  convertValueToPercentage,
  getClosestValueIndex,
  getDecimalCount,
  getLabel,
  getNextSortedValues,
  getThumbInBoundsOffset,
  hasMinStepsBetweenValues,
  linearScale,
  roundValue,
} from './slider.utils';
import type {
  SliderContextType,
  SliderHorizontalProps,
  SliderImplProps,
  SliderKnobProps,
  SliderProps,
  SliderSizes,
  SliderTrackProps,
  SliderVerticalProps,
} from './slider.types';
import type { GestureReponderEvent, GetProps, ScopedProps, TamaguiElement } from '@tamagui/core';
import type { ForwardedRef, KeyboardEvent } from 'react';
import type { View } from 'react-native';

export const { Provider: SliderProvider, useStyledContext: useSliderContext } = SliderContext;

const SliderImpl = SliderFrame.styleable<SliderImplProps>(
  (props: ScopedProps<SliderImplProps>, forwardedRef) => {
    const {
      scope,
      onSlideStart,
      onSlideMove,
      onSlideEnd,
      onHomeKeyDown,
      onEndKeyDown,
      onStepKeyDown,
      ...sliderProps
    } = props;
    const context = useSliderContext(scope);
    return (
      <SliderFrame
        {...sliderProps}
        data-orientation={sliderProps.orientation}
        ref={forwardedRef}
        {...(isWeb && {
          onKeyDown: (event: KeyboardEvent) => {
            if (event.key === 'Home') {
              onHomeKeyDown(event);
              // Prevent scrolling to page start
              event.preventDefault();
            } else if (event.key === 'End') {
              onEndKeyDown(event);
              // Prevent scrolling to page end
              event.preventDefault();
            } else if (PAGE_KEYS.concat(ARROW_KEYS).includes(event.key)) {
              onStepKeyDown(event);
              // Prevent scrolling for directional key presses
              event.preventDefault();
            }
          },
        })}
        onMoveShouldSetResponderCapture={() => true}
        onScrollShouldSetResponder={() => true}
        onScrollShouldSetResponderCapture={() => true}
        onMoveShouldSetResponder={() => true}
        onStartShouldSetResponder={() => true}
        // onStartShouldSetResponderCapture={() => true}
        onResponderTerminationRequest={() => false}
        onResponderGrant={composeEventHandlers(props.onResponderGrant, (event) => {
          const target = event.target as unknown as TamaguiElement | number;
          const thumbIndex = context.thumbs.get(target as TamaguiElement);
          const isStartingOnThumb = thumbIndex !== undefined;

          // Prevent browser focus behaviour because we focus a thumb manually when values change.
          // Touch devices have a delay before focusing so won't focus if touch immediately moves
          // away from target (sliding). We want thumb to focus regardless.
          if (isWeb && target instanceof HTMLElement) {
            if (context.thumbs.has(target)) {
              target.focus();
            }
          }

          // Thumbs won't receive focus events on native, so we have to manually
          // set the value index to change when sliding starts on a thumb.
          if (!isWeb && isStartingOnThumb) {
            context.valueIndexToChangeRef.current = thumbIndex;
          }

          onSlideStart(event, isStartingOnThumb ? 'thumb' : 'track');
        })}
        onResponderMove={composeEventHandlers(props.onResponderMove, (event) => {
          event.stopPropagation();
          // const target = event.target as HTMLElement
          onSlideMove(event);
        })}
        onResponderRelease={composeEventHandlers(props.onResponderRelease, (event) => {
          // const target = event.target as HTMLElement
          onSlideEnd(event);
        })}
      />
    );
  },
);

const activeSliderMeasureListeners = new Set<(...args: unknown[]) => unknown>();

// run an interval on web as using translate can move things at any moment
// without triggering layout or intersection observers

if (isWeb && isClient) {
  if (!process.env.TAMAGUI_DISABLE_SLIDER_INTERVAL) {
    setInterval?.(
      () => {
        activeSliderMeasureListeners.forEach((cb) => cb());
      },
      // really doesn't need to be super often
      1000,
    );
  }
}

const SliderHorizontal = forwardRef<TamaguiElement, SliderHorizontalProps>(
  (props: ScopedProps<SliderHorizontalProps>, forwardedRef) => {
    const { min, max, dir, onSlideStart, onSlideMove, onStepKeyDown, onSlideEnd, ...sliderProps } =
      props;
    const direction = useDirection(dir);
    const isDirectionLTR = direction === 'ltr';
    const sliderRef = useRef<View>(null);
    const [state, setState_] = useState(() => ({ size: 0, offset: 0 }));
    const setState = useCreateShallowSetState(setState_);

    function getValueFromPointer(pointerPosition: number) {
      const input: [number, number] = [0, state.size];
      const output: [number, number] = isDirectionLTR ? [min, max] : [max, min];
      const value = linearScale(input, output);
      return value(pointerPosition);
    }

    const measure = () => {
      sliderRef.current?.measure((_x, _y, width, _height, pageX, _pageY) => {
        setState({
          size: width,
          offset: pageX,
        });
      });
    };

    if (isClient) {
      useOnDebouncedWindowResize(measure);

      // intersection change
      useEffect(() => {
        const node = sliderRef.current as unknown as HTMLDivElement;
        if (!node) return;

        let measureTm: ReturnType<typeof setTimeout>;
        const debouncedMeasure = () => {
          clearTimeout(measureTm);
          measureTm = setTimeout(() => {
            measure();
          }, 200);
        };

        const io = new IntersectionObserver(
          (entries) => {
            debouncedMeasure();
            if (entries?.[0].isIntersecting) {
              activeSliderMeasureListeners.add(debouncedMeasure);
            } else {
              activeSliderMeasureListeners.delete(debouncedMeasure);
            }
          },
          {
            root: null, // Use the viewport as the container.
            rootMargin: '0px',
            threshold: [0, 0.5, 1.0],
          },
        );

        io.observe(node);

        return () => {
          activeSliderMeasureListeners.delete(debouncedMeasure);
          io.disconnect();
        };
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    }

    return (
      <SliderOrientationProvider
        scope={props.scope}
        startEdge={isDirectionLTR ? 'left' : 'right'}
        endEdge={isDirectionLTR ? 'right' : 'left'}
        direction={isDirectionLTR ? 1 : -1}
        sizeProp="width"
        size={state.size}
      >
        <SliderImpl
          ref={composeRefs(forwardedRef, sliderRef)}
          dir={direction}
          {...sliderProps}
          orientation="horizontal"
          onLayout={measure}
          onSlideStart={(event, target) => {
            const value = getValueFromPointer(event.nativeEvent.locationX);
            if (value) {
              onSlideStart?.(value, target, event);
            }
          }}
          onSlideMove={(event) => {
            const value = getValueFromPointer(event.nativeEvent.pageX - state.offset);
            if (value) {
              onSlideMove?.(value, event);
            }
          }}
          onSlideEnd={(event) => {
            const value = getValueFromPointer(event.nativeEvent.pageX - state.offset);
            if (value) {
              onSlideEnd?.(event, value);
            }
          }}
          onStepKeyDown={(event) => {
            const isBackKey = BACK_KEYS[direction].includes(event.key);
            onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 });
          }}
        />
      </SliderOrientationProvider>
    );
  },
);

function useOnDebouncedWindowResize<T extends (...args: unknown[]) => unknown>(
  callback: T,
  amt = 200,
) {
  useEffect(() => {
    let last: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(last);
      last = setTimeout(callback, amt);
    };
    window.addEventListener('resize', onResize);
    return () => {
      clearTimeout(last);
      window.removeEventListener('resize', onResize);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}

const SliderVertical = forwardRef<View, SliderVerticalProps>(
  (props: ScopedProps<SliderVerticalProps>, forwardedRef) => {
    const { min, max, onSlideStart, onSlideMove, onStepKeyDown, onSlideEnd, ...sliderProps } =
      props;
    const [state, setState_] = useState(() => ({ size: 0, offset: 0 }));
    const setState = useCreateShallowSetState(setState_);
    const sliderRef = useRef<View>(null);

    function getValueFromPointer(pointerPosition: number) {
      const input: [number, number] = [0, state.size];
      const output: [number, number] = [max, min];
      const value = linearScale(input, output);
      return value(pointerPosition);
    }

    const measure = () => {
      sliderRef.current?.measure((_x, _y, _width, height, _pageX, pageY) => {
        setState({
          size: height,
          offset: pageY,
        });
      });
    };

    if (isClient) {
      useOnDebouncedWindowResize(measure);
    }

    return (
      <SliderOrientationProvider
        scope={props.scope}
        startEdge="bottom"
        endEdge="top"
        sizeProp="height"
        size={state.size}
        direction={1}
      >
        <SliderImpl
          ref={composeRefs(forwardedRef, sliderRef)}
          {...sliderProps}
          orientation="vertical"
          onLayout={measure}
          onSlideStart={(event, target) => {
            const value = getValueFromPointer(event.nativeEvent.locationY);
            if (value) {
              onSlideStart?.(value, target, event);
            }
          }}
          onSlideMove={(event) => {
            const value = getValueFromPointer(event.nativeEvent.pageY - state.offset);
            if (value) {
              onSlideMove?.(value, event);
            }
          }}
          onSlideEnd={(event) => {
            const value = getValueFromPointer(event.nativeEvent.pageY - state.offset);
            onSlideEnd?.(event, value);
          }}
          onStepKeyDown={(event) => {
            const isBackKey = BACK_KEYS.ltr.includes(event.key);
            onStepKeyDown?.({ event, direction: isBackKey ? -1 : 1 });
          }}
        />
      </SliderOrientationProvider>
    );
  },
);

type SliderTrackElement = HTMLElement | View;

const SliderTrack = forwardRef<SliderTrackElement, SliderTrackProps>(
  (props: ScopedProps<SliderTrackProps>, forwardedRef) => {
    const { scope, ...trackProps } = props;
    const { mediaContext, ...context } = useStyledMediaContext(SliderContext, scope);
    return (
      <SliderTrackFrame
        data-disabled={context.disabled ? '' : undefined}
        data-orientation={context.orientation}
        orientation={context.orientation}
        {...mediaContext}
        {...trackProps}
        ref={forwardedRef}
      />
    );
  },
);

type SliderTrackActiveProps = GetProps<typeof SliderTrackActiveFrame>;

const SliderTrackActive = forwardRef<View, SliderTrackActiveProps>(
  (props: ScopedProps<SliderTrackActiveProps>, forwardedRef) => {
    const { scope, ...rangeProps } = props;
    const { mediaContext, ...context } = useStyledMediaContext(SliderContext, scope);
    const orientation = useSliderOrientationContext(scope);
    const ref = useRef<View>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const valuesCount = context.values.length;
    const percentages = context.values.map((value) =>
      convertValueToPercentage(value, context.min, context.max),
    );
    const offsetStart = valuesCount > 1 ? Math.min(...percentages) : 0;
    const offsetEnd = 100 - Math.max(...percentages);

    return (
      <SliderTrackActiveFrame
        orientation={context.orientation}
        data-orientation={context.orientation}
        data-disabled={context.disabled ? '' : undefined}
        animateOnly={['left', 'top', 'right', 'bottom']}
        {...mediaContext}
        {...rangeProps}
        ref={composedRefs}
        {...{
          [orientation.startEdge]: `${offsetStart}%`,
          [orientation.endEdge]: `${offsetEnd}%`,
        }}
        {...(orientation.sizeProp === 'width'
          ? {
              height: '100%',
            }
          : {
              left: 0,
              right: 0,
            })}
      />
    );
  },
);

const getKnobSize = (val: SliderSizes) => {
  const config = getComponentsConfig();
  const componentProps = config.slider[val as keyof typeof config.slider];
  if (!componentProps) {
    return {
      width: 24,
      height: 24,
      minWidth: 24,
      minHeight: 24,
    };
  }

  const { width, height } = getMappedStyles(componentProps.knob);

  return {
    width,
    height,
    minWidth: width,
    minHeight: height,
  };
};

const SliderKnob = SliderKnobFrame.styleable<SliderKnobProps>(
  (props: ScopedProps<SliderKnobProps>, forwardedRef) => {
    const { scope, index, ...thumbProps } = props;
    const { mediaContext, ...context } = useStyledMediaContext(SliderContext, scope);
    const orientation = useSliderOrientationContext(scope);
    const [thumb, setThumb] = useState<TamaguiElement | null>(null);
    const composedRefs = useComposedRefs(forwardedRef, setThumb);

    // We cast because index could be `-1` which would return undefined
    const value = context.values[index] as number | undefined;
    const percent =
      value === undefined ? 0 : convertValueToPercentage(value, context.min, context.max);
    const label = getLabel(index, context.values.length);
    const sizeIn = thumbProps.size ?? mediaContext.size;

    const [size, setSize] = useState(() => {
      // for SSR
      const estimatedSize = getSafeTokenValue(getKnobSize(sizeIn ?? '$500').width);
      return estimatedSize as number;
    });

    const thumbInBoundsOffset = size
      ? getThumbInBoundsOffset(size, percent, orientation.direction)
      : 0;

    useEffect(() => {
      if (thumb) {
        context.thumbs.set(thumb, index);
        return () => {
          context.thumbs.delete(thumb);
        };
      }
    }, [thumb, context.thumbs, index]);

    const positionalStyles =
      context.orientation === 'horizontal'
        ? {
            x: thumbInBoundsOffset - size / 2,
            y: -size / 2,
            top: '50%',
            ...(size === 0 && {
              top: 'auto',
              bottom: 'auto',
            }),
          }
        : {
            x: -size / 2,
            y: size / 2,
            left: '50%',
            ...(size === 0 && {
              left: 'auto',
              right: 'auto',
            }),
          };

    return (
      <SliderKnobFrame
        ref={composedRefs}
        role="slider"
        aria-label={props['aria-label'] || label}
        aria-valuemin={context.min}
        aria-valuenow={value}
        aria-valuemax={context.max}
        aria-orientation={context.orientation}
        data-orientation={context.orientation}
        data-disabled={context.disabled ? '' : undefined}
        tabIndex={context.disabled ? undefined : 0}
        animateOnly={['transform', 'left', 'top', 'right', 'bottom']}
        {...(positionalStyles as Pick<SliderKnobProps, 'x' | 'y' | 'top' | 'left'>)}
        {...{
          [orientation.startEdge]: `${percent}%`,
        }}
        {...mediaContext}
        {...thumbProps}
        onLayout={(e) => {
          setSize(e.nativeEvent.layout[orientation.sizeProp]);
        }}
        /**
         * There will be no value on initial render while we work out the index so we hide thumbs
         * without a value, otherwise SSR will render them in the wrong position before they
         * snap into the correct position during hydration which would be visually jarring for
         * slower connections.
         */
        // style={value === undefined ? { display: 'none' } : props.style}
        onFocus={composeEventHandlers(props.onFocus, () => {
          context.valueIndexToChangeRef.current = index;
        })}
      />
    );
  },
  {
    staticConfig: {
      memo: true,
    },
  },
);

const SliderComponent = forwardRef((props: ScopedProps<SliderProps>, forwardedRef) => {
  const {
    name,
    min = 0,
    max = 100,
    step = 1,
    orientation = 'horizontal',
    disabled = false,
    minStepsBetweenThumbs = 0,
    defaultValue = [min],
    value,
    onValueChange = () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
    onSlideEnd,
    onSlideMove,
    onSlideStart,
    ...propsIn
  } = props;
  const { size: sizeProp = '$500', ...sliderProps } = propsIn;
  const sliderRef = useRef<View>(null);
  const composedRefs = useComposedRefs(sliderRef, forwardedRef);
  const thumbRefs = useRef<SliderContextType['thumbs']>(new Map());
  const valueIndexToChangeRef = useRef<number>(0);
  const isHorizontal = orientation === 'horizontal';
  // We set this to true by default so that events bubble to forms without JS (SSR)
  // const isFormControl =
  //   sliderRef.current instanceof HTMLElement ? Boolean(sliderRef.current.closest('form')) : true

  const [values = [], setValues] = useControllableState({
    prop: value,
    defaultProp: defaultValue,
    transition: true,
    onChange: (value: number[]) => {
      updateThumbFocus(valueIndexToChangeRef.current);
      onValueChange(value);
    },
  });

  if (isWeb) {
    useEffect(() => {
      const node = sliderRef.current as unknown as HTMLElement;
      if (!node) return;
      const preventDefault = (e: TouchEvent) => {
        e.preventDefault();
      };
      node.addEventListener('touchstart', preventDefault);
      return () => {
        node.removeEventListener('touchstart', preventDefault);
      };
    }, []);
  }

  function updateThumbFocus(focusIndex: number) {
    // Thumbs are not focusable on native
    if (!isWeb) return;

    for (const [node, index] of thumbRefs.current.entries()) {
      if (index === focusIndex) {
        node.focus();
        return;
      }
    }
  }

  function handleSlideMove(value: number, event: GestureReponderEvent) {
    updateValues(value, valueIndexToChangeRef.current);
    onSlideMove?.(event, value);
  }

  function updateValues(value: number, atIndex: number) {
    const decimalCount = getDecimalCount(step);
    const snapToStep = roundValue(Math.round((value - min) / step) * step + min, decimalCount);
    const nextValue = clamp(snapToStep, [min, max]);
    setValues((prevValues = []) => {
      const nextValues = getNextSortedValues(prevValues, nextValue, atIndex);
      if (hasMinStepsBetweenValues(nextValues, minStepsBetweenThumbs * step)) {
        valueIndexToChangeRef.current = nextValues.indexOf(nextValue);
        return String(nextValues) === String(prevValues) ? prevValues : nextValues;
      }
      return prevValues;
    });
  }

  const SliderOriented = isHorizontal ? SliderHorizontal : SliderVertical;

  return (
    <SliderProvider
      scope={props.scope}
      componentProps={{ size: sizeProp, ...sliderProps }}
      disabled={disabled}
      min={min}
      max={max}
      orientation={orientation}
      valueIndexToChangeRef={valueIndexToChangeRef}
      thumbs={thumbRefs.current}
      values={values}
    >
      <SliderOriented
        aria-disabled={disabled}
        data-disabled={disabled ? '' : undefined}
        size={sizeProp}
        {...sliderProps}
        ref={composedRefs}
        min={min}
        max={max}
        onSlideEnd={onSlideEnd}
        onSlideStart={
          disabled
            ? undefined
            : (value: number, target, event) => {
                // when starting on the track, move it right away
                // when starting on thumb, dont jump until movemenet as it feels weird
                if (target !== 'thumb') {
                  const closestIndex = getClosestValueIndex(values, value);
                  updateValues(value, closestIndex);
                }
                onSlideStart?.(event, value, target);
              }
        }
        onSlideMove={disabled ? undefined : handleSlideMove}
        onHomeKeyDown={() => !disabled && updateValues(min, 0)}
        onEndKeyDown={() => !disabled && updateValues(max, values.length - 1)}
        onStepKeyDown={({ event, direction: stepDirection }) => {
          if (!disabled) {
            const isPageKey = PAGE_KEYS.includes(event.key);
            const isSkipKey = isPageKey || (event.shiftKey && ARROW_KEYS.includes(event.key));
            const multiplier = isSkipKey ? 10 : 1;
            const atIndex = valueIndexToChangeRef.current;
            const value = values[atIndex];
            const stepInDirection = step * multiplier * stepDirection;
            updateValues(value + stepInDirection, atIndex);
          }
        }}
      />
    </SliderProvider>
  );
});

export const Slider = withStaticProperties(SliderComponent, {
  Track: SliderTrack,
  TrackActive: SliderTrackActive,
  Knob: SliderKnob,
});
