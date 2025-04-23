import {
  composeEventHandlers,
  createStyledContext,
  isWeb,
  useEvent,
  withStaticProperties,
} from '@tamagui/core';
import { ScrollView } from '@tamagui/scroll-view';
import { useControllableState } from '@tamagui/use-controllable-state';
import useIconsPosition from '@xsolla-zk-ui/react/hooks/use-icons-position';
import { useEffect, useMemo, useState, type ForwardedRef } from 'react';
import { ChipsFrame, ChipFrame, ChipIcon, ChipText, ChipContext } from './chips.styled';
import { type ChipProps, type ChipsProps } from './chips.types';
import type {
  ChipsContextType,
  ChipsMultiSelectProps,
  ChipsMultiValue,
  ChipsSingleSelectProps,
  ChipsValue,
} from './chips.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';

const { Provider: ChipsContextProvider, useStyledContext: useChipsContextProvider } =
  createStyledContext<ChipsContextType>({
    size: '$500',
    variant: 'primary',
    tone: 'brand',
    chipsCount: 0,
    onChange: () => ({}),
    registerChip: () => ({}),
    unregisterChip: () => ({}),
  });

const ChipsComponent = ChipsFrame.styleable<ChipsProps>(
  (
    {
      children,
      value: valueProp,
      onValueChange,
      defaultValue,
      tone = 'brand',
      variant = 'primary',
      size = '$500',
      multiselect = false,
      scrollable = false,
      ...props
    },
    ref: ForwardedRef<TamaguiElement>,
  ) => {
    const [chipsCount, setChipsCount] = useState(0);
    const registerChip = useEvent(() => setChipsCount((v) => v + 1));
    const unregisterChip = useEvent(() => setChipsCount((v) => v - 1));

    const processedValue = useMemo(() => {
      if (!valueProp) return undefined;

      if (multiselect) {
        if (Array.isArray(valueProp)) {
          return new Set<ChipsValue>(valueProp);
        }
        return new Set<ChipsValue>();
      }

      return valueProp as ChipsValue;
    }, [multiselect, valueProp]);

    const [value, setValue] = useControllableState<ChipsContextType['value']>({
      prop: processedValue,
      onChange: (val: ChipsContextType['value']) => {
        if (multiselect) {
          (onValueChange as ChipsMultiSelectProps['onValueChange'])?.(
            Array.from(val as Set<ChipsValue>),
          );
        } else {
          (onValueChange as ChipsSingleSelectProps['onValueChange'])?.(val as ChipsValue);
        }
      },
      defaultProp: multiselect
        ? new Set(defaultValue as ChipsMultiValue)
        : ((defaultValue ?? '') as ChipsValue),
    });

    const handleChange = useEvent<ChipsContextType['onChange']>((chipValue) => {
      setValue((prev) => {
        if (multiselect) {
          const newSet = new Set(prev as Set<ChipsValue>);
          if (newSet.has(chipValue)) {
            newSet.delete(chipValue);
          } else {
            newSet.add(chipValue);
          }
          return newSet;
        }

        if (prev === chipValue) return '';

        return chipValue;
      });
    });

    return (
      <ChipsContextProvider
        value={value}
        onChange={handleChange}
        tone={tone}
        variant={variant}
        size={size}
        chipsCount={chipsCount}
        registerChip={registerChip}
        unregisterChip={unregisterChip}
        multiselect={multiselect}
      >
        {scrollable ? (
          <ScrollView horizontal>
            <ChipsFrame size={size} {...props} ref={ref}>
              {children}
            </ChipsFrame>
          </ScrollView>
        ) : (
          <ChipsFrame size={size} {...props} ref={ref}>
            {children}
          </ChipsFrame>
        )}
      </ChipsContextProvider>
    );
  },
  {
    disableTheme: true,
  },
);

const ChipComponent = ChipFrame.styleable<ChipProps>(
  ({ children, tone, value, variant, ...props }, ref: ForwardedRef<TamaguiElement>) => {
    const iconsPosition = useIconsPosition(children, ChipIcon);
    const ctx = useChipsContextProvider();

    const isSelected = ctx.multiselect
      ? ctx.value instanceof Set
        ? ctx.value.has(value)
        : Array.isArray(ctx.value) && ctx.value.includes(value)
      : value === ctx.value;

    useEffect(() => {
      ctx.registerChip();
      return () => ctx.unregisterChip();
    }, []);

    return (
      <ChipFrame
        theme={isSelected ? ((tone ?? ctx.tone) as unknown as ThemeName) : 'neutral'}
        tone={isSelected ? (tone ?? ctx.tone) : 'neutral'}
        size={ctx.size}
        variant={isSelected ? (variant ?? ctx.variant) : 'secondary'}
        onPress={composeEventHandlers(props.onPress ?? undefined, (event) => {
          const webChecks =
            !isWeb ||
            ((event as unknown as MouseEvent).button === 0 &&
              (event as unknown as MouseEvent).ctrlKey === false);
          if (!props.disabled && webChecks) {
            ctx.onChange?.(value);
          } else {
            event.preventDefault();
          }
        })}
        {...iconsPosition}
        {...props}
        ref={ref}
      >
        {children}
      </ChipFrame>
    );
  },
  {
    disableTheme: true,
  },
);

const Chip = withStaticProperties(ChipComponent, {
  Props: ChipContext.Provider,
  Text: ChipText,
  Icon: ChipIcon,
});

export const Chips = withStaticProperties(ChipsComponent, {
  Item: Chip,
});
