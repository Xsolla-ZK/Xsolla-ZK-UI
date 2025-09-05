/* forked from @tamagui/switch */
/* https://github.com/tamagui/tamagui/blob/main/code/ui/switch/src/createSwitch.tsx */

import {
  composeEventHandlers,
  isWeb,
  shouldRenderNativePlatform,
  withStaticProperties,
} from '@tamagui/core';
import { registerFocusable } from '@tamagui/focusable';
import { useSwitch } from '@tamagui/switch-headless';
import { useControllableState } from '@tamagui/use-controllable-state';
import { getSafeTokenValue } from '@xsolla-zk/ui-utils';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Switch as NativeSwitch } from 'react-native';
import { SwitchContext, SwitchFrame, SwitchKnob, SwitchOverlay } from './switch.styled';
import type { SwitchKnobProps, SwitchProps } from './switch.types';
import type { SwitchProps as HeadlessSwitchProps } from '@tamagui/switch-headless';
import type { ForwardedRef } from 'react';
import type { View as NativeView } from 'react-native';

const { Provider: SwitchProvider, useStyledContext: useSwitchContext } = SwitchContext;

const SwitchComponent = SwitchFrame.styleable<SwitchProps>(
  (
    { native, nativeProps, checked: checkedProp, defaultChecked, onCheckedChange, ...propsIn },
    forwardedRef,
  ) => {
    const { size = '$600', ...props } = propsIn;
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
    const providerValue = useMemo(() => ({ checked, disabled }), [checked, disabled]);

    return (
      <SwitchProvider componentProps={{ size, ...props }} {...providerValue}>
        <SwitchFrame
          ref={switchRef}
          tag="button"
          size={size}
          {...(isWeb && { type: 'button' })}
          {...props}
          {...switchProps}
          theme={checked ? 'active' : undefined}
          checked={checked}
          disabled={disabled}
          // @ts-ignore: Without declaration. scope group only
          group={!disabled ? 'switch' : undefined}
        >
          {!disabled && (
            <SwitchOverlay
              {...{
                [`$group-switch-hover`]: {
                  opacity: 0.5,
                },
                [`$group-switch-press`]: {
                  opacity: 0.3,
                  backgroundColor: '$background.static-dark-high',
                },
              }}
            />
          )}
          {props.children}
        </SwitchFrame>

        {bubbleInput}
      </SwitchProvider>
    );
  },
  {
    disableTheme: true,
  },
);

const SwitchKnobComponent = SwitchKnob.styleable<SwitchKnobProps>((props, forwardedRef) => {
  const { nativeID, ...thumbProps } = props;
  const { checked, disabled } = useSwitchContext();

  const initialChecked = useRef(checked).current;

  const initialWidth = getSafeTokenValue(props.width);
  const [thumbWidth, setThumbWidth] = useState(typeof initialWidth === 'number' ? initialWidth : 0);
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
      checked={checked}
      disabled={disabled}
      {...thumbProps}
    />
  );
});

export const Switch = withStaticProperties(SwitchComponent, {
  Knob: SwitchKnobComponent,
});
