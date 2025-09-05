import { useComposedRefs, withStaticProperties } from '@tamagui/core';
import { useControllableState } from '@tamagui/use-controllable-state';
import { isValidElement, useMemo, useRef } from 'react';
import { useChildrenArray, useExtractedProps } from '../../hooks';
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
import type { ReactElement } from 'react';

const InputBase = createInput(InputElement);

const InputComponent = InputBase.styleable<InputProps>(
  (_props, forwardedRef) => {
    const {
      frameStyles,
      disabled,
      children,
      error,
      onFocus,
      onBlur,
      isFocused,
      onFocusChange,
      ...props
    } = _props;
    const extractedProps = useExtractedProps(props, ['size']);
    const childrenArray = useChildrenArray(children);
    const [focused, setFocused] = useControllableState({
      prop: isFocused,
      defaultProp: false,
      onChange: onFocusChange,
    });
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

    const providerValue = useMemo(
      () => ({
        error,
        disabled,
        focused,
      }),
      [error, disabled, focused],
    );

    return (
      <InputContext.Provider componentProps={props} {...providerValue}>
        <InputFrame
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
          {...extractedProps}
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
      </InputContext.Provider>
    );
  },
  {
    disableTheme: true,
  },
);

export const Input = withStaticProperties(InputComponent, {
  StartSlot: InputStartSlot,
  EndSlot: InputEndSlot,
});
