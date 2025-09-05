// rework tamagui implementation of Checkbox component - @tamagui/switch-headless based
// https://github.com/tamagui/tamagui/blob/main/code/ui/checkbox/src/createCheckbox.tsx

import { isIndeterminate, useCheckbox } from '@tamagui/checkbox-headless';
import { shouldRenderNativePlatform, withStaticProperties } from '@tamagui/core';
import { registerFocusable } from '@tamagui/focusable';
import { useControllableState } from '@tamagui/use-controllable-state';
import { useEffect } from 'react';

import {
  CheckboxContext,
  CheckboxFrame,
  CheckboxIndicator,
  CheckboxOverlay,
} from './checkbox.styled';
import type { CheckboxProps } from './checkbox.types';
import type { TamaguiElement } from '@tamagui/core';
import type { CSSProperties, ForwardedRef, RefObject } from 'react';

const CheckboxComponent = CheckboxFrame.styleable<CheckboxProps>(
  (
    { children, checked: checkedProp, defaultChecked, onCheckedChange, native, ...props },
    forwardedRef: ForwardedRef<TamaguiElement>,
  ) => {
    const [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked!,
      onChange: onCheckedChange,
    });

    const { checkboxProps, checkboxRef, bubbleInput } = useCheckbox(
      // @ts-ignore: fix propsActive type
      props,
      [checked, setChecked],
      forwardedRef,
    );

    if (process.env.TAMAGUI_TARGET === 'native') {
      useEffect(() => {
        if (!props.id) return;
        if (props.disabled) return;

        return registerFocusable(props.id, {
          focusAndSelect: () => {
            setChecked?.((value) => !value);
          },
          focus: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
        });
      }, [props.id, props.disabled]); // eslint-disable-line react-hooks/exhaustive-deps
    }

    const renderNative = shouldRenderNativePlatform(native);

    if (renderNative === 'web') {
      return (
        <input
          type="checkbox"
          defaultChecked={isIndeterminate(checked) ? false : checked}
          tabIndex={-1}
          ref={checkboxRef as unknown as RefObject<HTMLInputElement>}
          disabled={checkboxProps.disabled}
          style={{
            appearance: 'auto',
            accentColor: 'var(--background--brand-high)',
            ...(checkboxProps.style as CSSProperties),
          }}
        />
      );
    }

    return (
      <>
        <CheckboxContext.Provider
          componentProps={props}
          checked={checked}
          disabled={checkboxProps.disabled}
        >
          <CheckboxFrame
            group
            tag="button"
            ref={checkboxRef}
            theme={checked ? 'active' : undefined}
            // potential variant
            checked={checked}
            disabled={checkboxProps.disabled}
            {...checkboxProps}
            {...props}
            // react 76 style prop mis-match, but should be fine
            style={checkboxProps.style}
          >
            <CheckboxOverlay />
            {children}
          </CheckboxFrame>
          {bubbleInput}
        </CheckboxContext.Provider>
      </>
    );
  },
  {
    disableTheme: true,
  },
);

export const Checkbox = withStaticProperties(CheckboxComponent, {
  Indicator: CheckboxIndicator,
});
