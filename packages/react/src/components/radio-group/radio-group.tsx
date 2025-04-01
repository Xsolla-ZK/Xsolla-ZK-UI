// rework tamagui implementation of RadioGroup component - @tamagui/radio-headless based
// https://github.com/tamagui/tamagui/blob/main/code/ui/radio-group/src/createRadioGroup.tsx

import { isWeb, withStaticProperties } from '@tamagui/core';
import { themed } from '@tamagui/helpers-icon';
import {
  useRadioGroup,
  useRadioGroupItem,
  useRadioGroupItemIndicator,
} from '@tamagui/radio-headless';
import { RovingFocusGroup } from '@tamagui/roving-focus';
import { createContext, memo, useContext } from 'react';

import Svg, { Circle } from 'react-native-svg';
import {
  radioGroupComponentConfig,
  RadioGroupContext,
  RadioGroupFrame,
  RadioGroupItemFrame,
  RadioGroupOverlay,
} from './radio-group.styled';
import type {
  RadioGroupContextType,
  RadioGroupItemProps,
  RadioGroupProps,
} from './radio-group.types';
import type { ColorTokens, TamaguiElement } from '@tamagui/core';
import type { IconProps } from '@tamagui/helpers-icon';
import type { RadioGroupItemContextValue } from '@tamagui/radio-headless';
import type { ForwardedRef } from 'react';

// const RadioGroupContext = createContext<RadioGroupContextValue>({});

const RadioGroupItemContext = createContext<RadioGroupItemContextValue>({
  checked: false,
  disabled: false,
});

const RadioGroupComponent = RadioGroupFrame.styleable<RadioGroupProps>(
  (props, ref: ForwardedRef<TamaguiElement>) => {
    const {
      value,
      defaultValue,
      onValueChange,
      required = false,
      disabled = false,
      name,
      native,
      accentColor,
      orientation = 'vertical',
      ...rest
    } = props;

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
      <RadioGroupContext.Provider {...providerValue}>
        <RovingFocusGroup {...rovingFocusGroupAttrs}>
          <RadioGroupFrame {...frameAttrs} ref={ref} {...rest} />
        </RovingFocusGroup>
      </RadioGroupContext.Provider>
    );
  },
);

const RadioGroupItemComponent = RadioGroupItemFrame.styleable<RadioGroupItemProps>(
  (props, ref: ForwardedRef<TamaguiElement>) => {
    const { value, labelledBy, onPress, onKeyDown, disabled, id, children, ...rest } = props;

    const { providerValue, bubbleInput, rovingFocusGroupAttrs, frameAttrs, isFormControl, native } =
      useRadioGroupItem({
        radioGroupContext: RadioGroupContext,
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
                {...rest}
              >
                {!frameAttrs.disabled && <RadioGroupOverlay />}
                {children}
              </RadioGroupItemFrame>
            </RovingFocusGroup.Item>
            {isFormControl && bubbleInput}
          </>
        )}
      </RadioGroupItemContext.Provider>
    );
  },
  {
    disableTheme: true,
  },
);

const Indicator = memo<IconProps>(
  themed(
    (props) => {
      const { color = 'black', size = 24, ...otherProps } = props;
      return (
        <Svg fill="none" viewBox="0 0 24 24" width={size} height={size} {...otherProps}>
          <Circle cx="12" cy="12" r="8" fill={color} />
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

const RadioIndicator = (props) => {
  const { forceMount, ...indicatorProps } = props;
  const ctx = useContext(RadioGroupContext);
  const { checked, ...useIndicatorRest } = useRadioGroupItemIndicator({
    radioGroupItemContext: RadioGroupItemContext,
    disabled: ctx.disabled,
  });

  const radioGroupConfig = radioGroupComponentConfig[ctx.size];

  if (forceMount || checked) {
    return (
      <Indicator
        {...useIndicatorRest}
        size={radioGroupConfig.icon.size}
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

const RadioGroup = withStaticProperties(RadioGroupComponent, {
  Item: RadioGroupItemComponent,
  Indicator: RadioIndicator,
});

// function RadioGroup() {
//   return (
//     <div>hello</div>
//   )
// }

export default RadioGroup;
