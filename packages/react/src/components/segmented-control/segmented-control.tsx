import {
  composeEventHandlers,
  composeRefs,
  isWeb,
  useEvent,
  useProps,
  withStaticProperties,
} from '@tamagui/core';
import { RovingFocusGroup } from '@tamagui/roving-focus';
import { useControllableState } from '@tamagui/use-controllable-state';
import { useDirection } from '@tamagui/use-direction';
import { SEGMENTED_CONTROL_CONTEXT } from '@xsolla-zk/constants';
import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import {
  SegmentedControlContext,
  SegmentedControlFrame,
  SegmentedControlSegmentFrame,
  SegmentedControlSegmentIcon,
  SegmentedControlSegmentText,
} from './segmented-control.styled';
import type {
  SegmentedControlProps,
  SegmentedControlScopedProps,
  SegmentedControlSegmentProps,
} from './segmented-control.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef, HTMLProps } from 'react';

const { Provider: SegmentedControlProvider, useStyledContext: useSegmentedControlContext } =
  SegmentedControlContext;

function makeSegmentId(baseId: string, value: string) {
  return `${baseId}-segment-${value}`;
}

const SegmentedControlComponent = SegmentedControlFrame.styleable<
  SegmentedControlScopedProps<SegmentedControlProps>
>(
  forwardRef(
    (
      {
        __scopeSegmentedControl,
        value: valueProp,
        onValueChange,
        defaultValue,
        dir,
        activationMode = 'manual',
        ...propsIn
      },
      forwardedRef: ForwardedRef<TamaguiElement>,
    ) => {
      const {
        orientation = 'horizontal',
        size = '$500',
        loop = true,
        ...props
      } = useProps(propsIn);
      const direction = useDirection(dir);
      const [value, setValue] = useControllableState({
        prop: valueProp,
        onChange: onValueChange,
        defaultProp: defaultValue ?? '',
      });
      const [segments, setSegments] = useState<Record<string, number>>({});
      const registerSegment = useEvent((value: string) => {
        setSegments((prev) => ({
          ...prev,
          [value]: Object.keys(prev).length,
        }));
      });
      const unregisterSegment = useEvent((value: string) => {
        setSegments((prev) => {
          const newSegments = { ...prev };
          delete newSegments[value];
          return newSegments;
        });
      });
      const ref = useRef<TamaguiElement>(null);

      return (
        <SegmentedControlProvider
          scope={__scopeSegmentedControl}
          baseId={useId()}
          value={value}
          onChange={setValue}
          orientation={orientation}
          dir={direction}
          activationMode={activationMode}
          size={size}
          registerSegment={registerSegment}
          unregisterSegment={unregisterSegment}
          segments={segments}
          containerRef={ref}
        >
          <RovingFocusGroup
            __scopeRovingFocusGroup={__scopeSegmentedControl || SEGMENTED_CONTROL_CONTEXT}
            orientation={orientation}
            dir={direction}
            loop={loop}
            asChild
          >
            <SegmentedControlFrame
              role="tablist"
              direction={direction}
              data-orientation={orientation}
              aria-orientation={orientation}
              orientation={orientation}
              size={size}
              {...props}
              ref={composeRefs(forwardedRef, ref)}
            />
          </RovingFocusGroup>
        </SegmentedControlProvider>
      );
    },
  ),
);

const SegmentedControlSegment = SegmentedControlSegmentFrame.styleable<
  SegmentedControlScopedProps<SegmentedControlSegmentProps>
>(
  forwardRef((props, forwardedRef: ForwardedRef<TamaguiElement>) => {
    const {
      __scopeSegmentedControl,
      value,
      disabled = false,
      onInteraction,
      disableActiveTheme,
      ...segmentProps
    } = props;
    const context = useSegmentedControlContext(__scopeSegmentedControl);
    const segmentId = makeSegmentId(context.baseId, value);
    const isSelected = value === context.value;
    const segmentRef = useRef<HTMLButtonElement>(null);
    const placement =
      context.segments[value] === 0
        ? 'left'
        : context.segments[value] === Object.keys(context.segments).length - 1
          ? 'right'
          : undefined;

    useEffect(() => {
      context.registerSegment(value);
      return () => context.unregisterSegment(value);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <RovingFocusGroup.Item
        __scopeRovingFocusGroup={__scopeSegmentedControl || SEGMENTED_CONTROL_CONTEXT}
        asChild
        tabIndex={disabled ? -1 : 0}
        active={isSelected}
      >
        <SegmentedControlSegmentFrame
          role="tab"
          aria-selected={isSelected}
          data-state={isSelected ? 'active' : 'inactive'}
          data-disabled={disabled ? '' : undefined}
          disabled={disabled}
          id={segmentId}
          size={context.size}
          placement={placement}
          active={isSelected}
          theme={isSelected && !disableActiveTheme ? 'active' : null}
          {...(isSelected && {
            forceStyle: 'focus',
          })}
          {...segmentProps}
          ref={composeRefs(forwardedRef, segmentRef)}
          onPress={composeEventHandlers(props.onPress ?? undefined, (event) => {
            // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
            // but not when the control key is pressed (avoiding MacOS right click)
            const webChecks =
              !isWeb ||
              (isWeb &&
                (event as unknown as MouseEvent).button === 0 &&
                (event as unknown as MouseEvent).ctrlKey === false);

            if (!disabled && !isSelected && webChecks) {
              context.onChange(value);
              onInteraction?.('select', value);
            } else {
              // prevent focus to avoid accidental activation
              (event as unknown as MouseEvent).preventDefault();
            }
          })}
          {...(isWeb && {
            type: 'button',
            onKeyDown: composeEventHandlers(
              (props as HTMLProps<HTMLButtonElement>).onKeyDown,
              (event) => {
                if ([' ', 'Enter'].includes(event.key)) {
                  context.onChange(value);
                  onInteraction?.('select', value);
                  event.preventDefault();
                }
              },
            ),
            onFocus: composeEventHandlers(props.onFocus, (_event) => {
              onInteraction?.('focus', value);
              // handle "automatic" activation if necessary
              // ie. activate segment following focus
              const isAutomaticActivation = context.activationMode !== 'manual';
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onChange(value);
              }
            }),
          })}
        >
          {props.children}
        </SegmentedControlSegmentFrame>
      </RovingFocusGroup.Item>
    );
  }),
  { disableTheme: true },
);

const Segment = withStaticProperties(SegmentedControlSegment, {
  Text: SegmentedControlSegmentText,
  Icon: SegmentedControlSegmentIcon,
});

export const SegmentedControl = withStaticProperties(SegmentedControlComponent, {
  Item: Segment,
});
