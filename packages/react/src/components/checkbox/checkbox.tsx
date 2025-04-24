// rework tamagui implementation of Checkbox component - @tamagui/switch-headless based
// https://github.com/tamagui/tamagui/blob/main/code/ui/checkbox/src/createCheckbox.tsx

/* eslint-disable @typescript-eslint/ban-ts-comment */

import { isIndeterminate, useCheckbox } from '@tamagui/checkbox-headless';
import { shouldRenderNativePlatform, useProps, withStaticProperties } from '@tamagui/core';
import { registerFocusable } from '@tamagui/focusable';
import { useControllableState } from '@tamagui/use-controllable-state';
import React, { useEffect } from 'react';

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
    // eslint-disable-next-line @typescript-eslint/unbound-method
    { checked: checkedProp, defaultChecked, onCheckedChange, native, ...props },
    forwardedRef: ForwardedRef<TamaguiElement>,
  ) => {
    const propsActive = useProps(props);

    const styledContext = React.useContext(CheckboxContext);

    const [checked = false, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked!,
      onChange: onCheckedChange,
    });

    const { checkboxProps, checkboxRef, bubbleInput } = useCheckbox(
      // @ts-ignore
      propsActive,
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
        <CheckboxFrame
          group
          tag="button"
          ref={checkboxRef}
          theme={checked ? 'active' : undefined}
          // potential variant
          checked={checked}
          disabled={checkboxProps.disabled}
          {...checkboxProps}
          size={propsActive.size ?? styledContext?.size}
          // react 76 style prop mis-match, but should be fine
          style={checkboxProps.style}
        >
          <CheckboxOverlay />
          {propsActive.children}
        </CheckboxFrame>
        {bubbleInput}
      </>
    );
  },
  {
    disableTheme: true,
  },
);

export const Checkbox = withStaticProperties(CheckboxComponent, {
  Props: CheckboxContext.Provider,
  Indicator: CheckboxIndicator,
});
