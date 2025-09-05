import {
  composeEventHandlers,
  composeRefs,
  isWeb,
  useEvent,
  withStaticProperties,
} from '@tamagui/core';
import { RovingFocusGroup } from '@tamagui/roving-focus';
import { useControllableState } from '@tamagui/use-controllable-state';
import { useDirection } from '@tamagui/use-direction';
import { SEGMENTED_CONTROL_CONTEXT } from '@xsolla-zk/constants';
import { useEffect, useId, useRef, useState } from 'react';
import { useStyledMediaContext } from '../../hooks';
import {
  SegmentedControlContext,
  SegmentedControlFrame,
  SegmentedControlSegmentFrame,
  SegmentedControlSegmentIcon,
  SegmentedControlSegmentText,
} from './segmented-control.styled';
import type {
  SegmentedControlProps,
  SegmentedControlSegmentProps,
} from './segmented-control.types';
import type { ScopedProps, TamaguiElement } from '@tamagui/core';
import type { HTMLProps } from 'react';

const { Provider: SegmentedControlProvider, useStyledContext: useSegmentedControlContext } =
  SegmentedControlContext;

function makeSegmentId(baseId: string, value: string) {
  return `${baseId}-segment-${value}`;
}

const SegmentedControlComponent = SegmentedControlFrame.styleable<SegmentedControlProps>(
  (
    {
      scope,
      value: valueProp,
      onValueChange,
      defaultValue,
      dir,
      activationMode = 'manual',
      ...propsIn
    }: ScopedProps<SegmentedControlProps>,
    forwardedRef,
  ) => {
    const { orientation = 'horizontal', size = '$500', loop = true, ...props } = propsIn;
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
        componentProps={{
          size,
          ...props,
        }}
        scope={scope}
        baseId={useId()}
        value={value}
        onChange={setValue}
        dir={direction}
        orientation={orientation}
        activationMode={activationMode}
        registerSegment={registerSegment}
        unregisterSegment={unregisterSegment}
        segments={segments}
        containerRef={ref}
      >
        <RovingFocusGroup
          __scopeRovingFocusGroup={scope || SEGMENTED_CONTROL_CONTEXT}
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
);

const SegmentedControlSegment =
  SegmentedControlSegmentFrame.styleable<SegmentedControlSegmentProps>(
    (props: ScopedProps<SegmentedControlSegmentProps>, forwardedRef) => {
      const {
        scope,
        value,
        disabled = false,
        onInteraction,
        disableActiveTheme,
        ...segmentProps
      } = props;
      const { mediaContext, ...context } = useStyledMediaContext(SegmentedControlContext, scope);
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
          __scopeRovingFocusGroup={scope || SEGMENTED_CONTROL_CONTEXT}
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
            placement={placement}
            active={isSelected}
            theme={isSelected && !disableActiveTheme ? 'active' : null}
            {...(isSelected && {
              forceStyle: 'focus',
            })}
            {...mediaContext}
            {...segmentProps}
            ref={composeRefs(forwardedRef, segmentRef)}
            onPress={composeEventHandlers(props.onPress, (event) => {
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
    },
    { disableTheme: true },
  );

const Segment = withStaticProperties(SegmentedControlSegment, {
  Text: SegmentedControlSegmentText,
  Icon: SegmentedControlSegmentIcon,
});

export const SegmentedControl = withStaticProperties(SegmentedControlComponent, {
  Item: Segment,
});
