// rework tamagui implementation of RadioGroup component - @tamagui/radio-headless based
// https://github.com/tamagui/tamagui/blob/main/code/ui/radio-group/src/createRadioGroup.tsx

import { isWeb, withStaticProperties } from '@tamagui/core';
import {
  useRadioGroup,
  useRadioGroupItem,
  useRadioGroupItemIndicator,
} from '@tamagui/radio-headless';
import { RovingFocusGroup } from '@tamagui/roving-focus';
import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { createContext, memo, useMemo } from 'react';
import { Circle } from 'react-native-svg';
import { processMediaValues } from '../../utils';
import {
  RadioGroupContext,
  RadioGroupFrame,
  RadioGroupItemFrame,
  RadioGroupOverlay,
} from './radio-group.styled';
import type {
  RadioGroupContextType,
  RadioGroupIndicatorProps,
  RadioGroupItemProps,
  RadioGroupProps,
} from './radio-group.types';
import type { ColorTokens } from '@tamagui/core';
import type { RadioGroupContextValue, RadioGroupItemContextValue } from '@tamagui/radio-headless';
import type { IconProps } from '@xsolla-zk/ui-primitives';
import type { Context } from 'react';

const RadioGroupItemContext = createContext<RadioGroupItemContextValue>({
  checked: false,
  disabled: false,
});

const RadioGroupComponent = RadioGroupFrame.styleable<RadioGroupProps>(
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
    ref,
  ) => {
    const { accentColor, orientation = 'vertical', ...props } = propsIn;

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
        componentProps={props}
        {...{
          ...providerValue,
        }}
      >
        <RovingFocusGroup {...rovingFocusGroupAttrs}>
          <RadioGroupFrame {...frameAttrs} ref={ref} {...props} />
        </RovingFocusGroup>
      </RadioGroupContext.Provider>
    );
  },
);

const RadioGroupItemComponent = RadioGroupItemFrame.styleable<RadioGroupItemProps>(
  ({ value, labelledBy, onPress, onKeyDown, disabled, id, children, ...propsIn }, ref) => {
    const { size } = RadioGroupContext.useStyledContext();

    const { providerValue, bubbleInput, rovingFocusGroupAttrs, frameAttrs, isFormControl, native } =
      useRadioGroupItem({
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
                {...propsIn}
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

const Indicator = memo<IconProps>((props) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Circle cx="12" cy="12" r="8" fill="currentColor" />
    </SvgThemed>
  );
});

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

  const iconProps = useMemo(
    () =>
      processMediaValues(
        { size: ctx.size },
        {
          size: (val, { config }) => {
            const componentProps = config.radio[val as keyof typeof config.radio];
            if (!componentProps) return {};
            return {
              size: componentProps.icon.size,
            };
          },
        },
      ) as IconProps,
    [ctx.size],
  );

  if (forceMount || checked) {
    return (
      <Indicator
        {...useIndicatorRest}
        {...iconProps}
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
