import { useComposedRefs, withStaticProperties } from '@tamagui/core';
import { forwardRef, isValidElement, useMemo, useRef, useState } from 'react';
import { useChildrenArray } from '../../hooks';
import { createInput } from './create-input';
import {
  InputContext,
  InputElement,
  InputEndSlot,
  InputFrame,
  InputStartSlot,
} from './input.styled';
import type { InputProps } from './input.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef, ReactElement } from 'react';

const InputBase = createInput(InputElement);

const InputComponent = InputBase.styleable<InputProps>(
  forwardRef((_props: InputProps, forwardedRef: ForwardedRef<TamaguiElement>) => {
    const {
      size = '$500',
      frameStyles,
      disabled,
      children,
      error,
      onFocus,
      onBlur,
      ...props
    } = _props;
    const childrenArray = useChildrenArray(children);
    const [focused, setFocused] = useState(false);
    const ref = useRef<TamaguiElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const isInteractingWithFrame = useRef(false);

    const { startSlot, endSlot } = useMemo(() => {
      let start: ReactElement | null = null;
      let end: ReactElement | null = null;

      childrenArray.forEach((child) => {
        if (isValidElement(child)) {
          if (child.type === InputStartSlot && !start) {
            start = child;
          } else if (child.type === InputEndSlot && !end) {
            end = child;
          }
        }
      });

      return {
        startSlot: start,
        endSlot: end,
      };
    }, [childrenArray]);

    return (
      <InputFrame
        size={size}
        focused={!props.readOnly ? focused : false}
        disabled={disabled}
        theme={props.readOnly ? 'readonly' : error ? 'error' : undefined}
        isTextarea={props.tag === 'textarea'}
        onPressIn={() => {
          isInteractingWithFrame.current = true;
        }}
        onPressOut={() => {
          isInteractingWithFrame.current = false;
        }}
        onPress={() => {
          if (props.readOnly) return;
          ref.current?.focus();
        }}
        {...frameStyles}
      >
        {startSlot}
        <InputBase
          {...(!props.readOnly
            ? {
                onFocus: (e) => {
                  setFocused(true);
                  onFocus?.(e);
                },
                onBlur: (e) => {
                  if (!isInteractingWithFrame.current) {
                    setFocused(false);
                    onBlur?.(e);
                  }
                },
              }
            : {})}
          {...props}
          ref={composedRefs}
        />
        {endSlot}
      </InputFrame>
    );
  }),
  {
    disableTheme: true,
  },
);

export const Input = withStaticProperties(InputComponent, {
  Props: InputContext.Provider,
  StartSlot: InputStartSlot,
  EndSlot: InputEndSlot,
});
