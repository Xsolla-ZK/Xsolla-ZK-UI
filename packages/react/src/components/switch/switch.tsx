/* forked from @tamagui/switch */
/* https://github.com/tamagui/tamagui/blob/main/code/ui/switch/src/createSwitch.tsx */

/* eslint-disable react-hooks/rules-of-hooks */

import {
  composeEventHandlers,
  isWeb,
  shouldRenderNativePlatform,
  withStaticProperties,
} from '@tamagui/core';
import { registerFocusable } from '@tamagui/focusable';
import { useSwitch } from '@tamagui/switch-headless';
import { useControllableState } from '@tamagui/use-controllable-state';
import { getSafeTokenValue } from '@xsolla-zk/react/utils';
import { useEffect, useMemo, useRef, useState, forwardRef } from 'react';
import { Switch as NativeSwitch } from 'react-native';
import { SwitchContext, SwitchFrame, SwitchKnob, SwitchOverlay } from './switch.styled';
import type { SwitchKnobProps, SwitchProps } from './switch.types';
import type { TamaguiElement } from '@tamagui/core';
import type { SwitchProps as HeadlessSwitchProps } from '@tamagui/switch-headless';
import type { ForwardedRef } from 'react';
import type { View as NativeView } from 'react-native';

const { Provider: SwitchProvider, useStyledContext: useSwitchContext } = SwitchContext;

const SwitchComponent = SwitchFrame.styleable<SwitchProps>(
  forwardRef(
    (
      {
        size,
        native,
        nativeProps,
        checked: checkedProp,
        defaultChecked,
        onCheckedChange,
        ...props
      },
      forwardedRef: ForwardedRef<TamaguiElement>,
    ) => {
      const [checked, setChecked] = useControllableState({
        prop: checkedProp,
        defaultProp: defaultChecked || false,
        onChange: onCheckedChange,
        transition: true,
      });

      const { switchProps, bubbleInput, switchRef } = useSwitch(
        props as HeadlessSwitchProps,
        [checked, setChecked],
        forwardedRef as unknown as ForwardedRef<NativeView>,
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
      if (renderNative === 'android' || renderNative === 'ios') {
        return <NativeSwitch value={checked} onValueChange={setChecked} {...nativeProps} />;
      }

      const disabled = Boolean(props.disabled);
      const value = useMemo(() => ({ checked, disabled }), [checked, disabled]);

      return (
        <SwitchProvider {...value}>
          <SwitchFrame
            ref={switchRef}
            tag="button"
            {...(isWeb && { type: 'button' })}
            {...props}
            {...switchProps}
            theme={checked ? 'active' : undefined}
            checked={checked}
            disabled={disabled}
            group={!disabled}
          >
            {!disabled && <SwitchOverlay />}
            {props.children}
          </SwitchFrame>

          {bubbleInput}
        </SwitchProvider>
      );
    },
  ),
  {
    disableTheme: true,
  },
);

const SwitchKnobComponent = SwitchKnob.styleable<SwitchKnobProps>(
  forwardRef((props, forwardedRef: ForwardedRef<TamaguiElement>) => {
    const { size: sizeProp, nativeID, ...thumbProps } = props;
    const context = useSwitchContext();
    const { checked, disabled, size: sizeContext } = context;
    const size = sizeProp ?? sizeContext;

    const initialChecked = useRef(checked).current;

    const initialWidth = getSafeTokenValue(props.width);
    const [thumbWidth, setThumbWidth] = useState(
      typeof initialWidth === 'number' ? initialWidth : 0,
    );
    const x = initialChecked ? (checked ? 0 : -thumbWidth) : checked ? thumbWidth : 0;

    return (
      <SwitchKnob
        ref={forwardedRef}
        alignSelf={initialChecked ? 'flex-end' : 'flex-start'}
        x={x}
        onLayout={composeEventHandlers(props.onLayout, (e) => {
          const next = e.nativeEvent.layout.width;
          if (next !== thumbWidth) {
            setThumbWidth(next);
          }
        })}
        size={size}
        checked={checked}
        disabled={disabled}
        {...thumbProps}
      />
    );
  }),
);

export const Switch = withStaticProperties(SwitchComponent, {
  Knob: SwitchKnobComponent,
});
