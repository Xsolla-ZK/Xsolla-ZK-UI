// rework tamagui implementation of RadioGroup component - @tamagui/radio-headless based
// https://github.com/tamagui/tamagui/blob/main/code/ui/radio-group/src/createRadioGroup.tsx

import { isWeb, useProps, withStaticProperties } from '@tamagui/core';
import { themed } from '@tamagui/helpers-icon';
import {
  useRadioGroup,
  useRadioGroupItem,
  useRadioGroupItemIndicator,
} from '@tamagui/radio-headless';
import { RovingFocusGroup } from '@tamagui/roving-focus';
import { createContext, forwardRef, memo } from 'react';
import Svg, { Circle } from 'react-native-svg';
import { getComponentsConfig } from '../../utils';
import {
  RadioGroupContext,
  RadioGroupFrame,
  RadioGroupItemFrame,
  RadioGroupOverlay,
} from './radio-group.styled';
import type {
  RadioGroupContextType,
  RadioGroupItemProps,
  RadioGroupProps,
  RadioGroupIndicatorProps,
} from './radio-group.types';
import type { ColorTokens, TamaguiElement } from '@tamagui/core';
import type { IconProps } from '@tamagui/helpers-icon';
import type { RadioGroupContextValue, RadioGroupItemContextValue } from '@tamagui/radio-headless';
import type { Context, ForwardedRef } from 'react';
import type { ColorValue } from 'react-native';

const RadioGroupItemContext = createContext<RadioGroupItemContextValue>({
  checked: false,
  disabled: false,
});

const RadioGroupComponent = RadioGroupFrame.styleable<RadioGroupProps>(
  forwardRef(
    (
      {
        value,
        defaultValue,
        onValueChange,
        name,
        native,
        required = false,
        disabled = false,
        ...propsIn
      },
      ref: ForwardedRef<TamaguiElement>,
    ) => {
      const { size = '$500', accentColor, orientation = 'vertical', ...props } = useProps(propsIn);

      const { providerValue, frameAttrs, rovingFocusGroupAttrs } = useRadioGroup({
        orientation,
        name,
        defaultValue,
        value,
        onValueChange,
        required,
        disabled,
        native,
        accentColor,
      });

      return (
        <RadioGroupContext.Provider
          {...{
            ...providerValue,
            size,
          }}
        >
          <RovingFocusGroup {...rovingFocusGroupAttrs}>
            <RadioGroupFrame {...frameAttrs} ref={ref} {...props} />
          </RovingFocusGroup>
        </RadioGroupContext.Provider>
      );
    },
  ),
);

const RadioGroupItemComponent = RadioGroupItemFrame.styleable<RadioGroupItemProps>(
  forwardRef(
    (
      { value, labelledBy, onPress, onKeyDown, disabled, id, ...propsIn },
      ref: ForwardedRef<TamaguiElement>,
    ) => {
      const { size: sizeCtx } = RadioGroupContext.useStyledContext();
      const props = useProps(propsIn);
      const size = props.size ?? sizeCtx;

      const {
        providerValue,
        bubbleInput,
        rovingFocusGroupAttrs,
        frameAttrs,
        isFormControl,
        native,
      } = useRadioGroupItem({
        radioGroupContext: RadioGroupContext as unknown as Context<RadioGroupContextValue>,
        value,
        id,
        labelledBy,
        disabled,
        onPress: onPress!,
        onKeyDown,
      });

      return (
        <RadioGroupItemContext.Provider value={providerValue}>
          {isWeb && native ? (
            bubbleInput
          ) : (
            <>
              <RovingFocusGroup.Item {...rovingFocusGroupAttrs}>
                <RadioGroupItemFrame
                  group
                  theme={providerValue.checked ? 'active' : undefined}
                  {...frameAttrs}
                  ref={ref}
                  size={size}
                  {...props}
                >
                  {!frameAttrs.disabled && <RadioGroupOverlay />}
                  {props.children}
                </RadioGroupItemFrame>
              </RovingFocusGroup.Item>
              {isFormControl && bubbleInput}
            </>
          )}
        </RadioGroupItemContext.Provider>
      );
    },
  ),
  {
    disableTheme: true,
  },
);

const Indicator = memo<IconProps>(
  themed(
    (props) => {
      const { color = 'black', size = 24, ...otherProps } = props;
      return (
        <Svg
          fill="none"
          viewBox="0 0 24 24"
          // @ts-expect-error - TODO: fix this
          width={size}
          // @ts-expect-error - TODO: fix this
          height={size}
          {...otherProps}
        >
          <Circle cx="12" cy="12" r="8" fill={color as ColorValue} />
        </Svg>
      );
    },
    { defaultStrokeWidth: 0 },
  ),
);

const getIndicatorColor = (ctx: RadioGroupContextType): ColorTokens => {
  if (ctx.disabled) {
    return '$content.neutral-tertiary';
  }

  return '$color';
};

const RadioIndicator = (props: RadioGroupIndicatorProps) => {
  const { forceMount, ...indicatorProps } = props;
  const ctx = RadioGroupContext.useStyledContext();
  const { checked, ...useIndicatorRest } = useRadioGroupItemIndicator({
    radioGroupItemContext: RadioGroupItemContext,
    disabled: ctx.disabled,
  });

  const config = getComponentsConfig();
  const componentProps = config.radio[ctx.size as keyof typeof config.radio];

  if (forceMount || checked) {
    return (
      <Indicator
        {...useIndicatorRest}
        size={componentProps.icon.size}
        color={getIndicatorColor(ctx)}
        {...indicatorProps}
      />
    );
  }

  return null;
};
// const RadioIndicator = RadioGroupIndicatorFrame.styleable<RadioGroupIndicatorProps>(
//   (props, forwardedRef: ForwardedRef<TamaguiElement>) => {
//     const { forceMount, disabled, ...indicatorProps } = props;
//     const { checked, ...useIndicatorRest } = useRadioGroupItemIndicator({
//       radioGroupItemContext: RadioGroupItemContext,
//       disabled,
//     });

//     if (forceMount || checked) {
//       return (
//         <RadioGroupIndicatorFrame {...useIndicatorRest} ref={forwardedRef} {...indicatorProps} />
//       );
//     }

//     return null;
//   },
// );

export const RadioGroup = withStaticProperties(RadioGroupComponent, {
  Item: RadioGroupItemComponent,
  Indicator: RadioIndicator,
});
