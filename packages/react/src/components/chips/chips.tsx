import { composeEventHandlers, isWeb, useEvent, withStaticProperties } from '@tamagui/core';
import { ScrollView } from '@tamagui/scroll-view';
import { useControllableState } from '@tamagui/use-controllable-state';
import { useEffect, useMemo, useState } from 'react';
import { useIconsPosition, useStyledMediaContext } from '../../hooks';
import { createStyledMediaContext, processMediaValues } from '../../utils';
import { ChipContext, ChipsContext } from './chips.context';
import { ChipFrame, ChipIcon, ChipsFrame, ChipText } from './chips.styled';
import type {
  ChipProps,
  ChipsContextType,
  ChipsMultiSelectProps,
  ChipsMultiValue,
  ChipsProps,
  ChipsSingleSelectProps,
  ChipsValue,
} from './chips.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const ChipsComponent = ChipsFrame.styleable<ChipsProps>(
  (
    { children, value: valueProp, onValueChange, defaultValue, ...propsIn },
    ref: ForwardedRef<TamaguiElement>,
  ) => {
    const {
      tone = 'brand',
      variant = 'primary',
      size = '$500',
      multiselect = false,
      scrollable = false,
      singleMode = false,
      ...props
    } = propsIn;
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

        if (!singleMode) {
          if (prev === chipValue) return '';
        }

        return chipValue;
      });
    });

    return (
      <ChipsContext.Provider
        componentProps={{ size, variant, ...props }}
        value={value}
        onChange={handleChange}
        tone={tone}
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
      </ChipsContext.Provider>
    );
  },
  {
    disableTheme: true,
  },
);

const ChipComponent = ChipFrame.styleable<ChipProps>(
  ({ children, value, ...propsIn }, ref: ForwardedRef<TamaguiElement>) => {
    const { tone, ...props } = propsIn;
    const iconsPosition = useIconsPosition(children, ChipIcon);
    const { mediaContext, ...ctx } = useStyledMediaContext(ChipsContext);

    const isSelected = ctx.multiselect
      ? ctx.value instanceof Set
        ? ctx.value.has(value)
        : Array.isArray(ctx.value) && ctx.value.includes(value)
      : value === ctx.value;

    useEffect(() => {
      ctx.registerChip();
      return () => ctx.unregisterChip();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <ChipContext.Provider
        componentProps={{
          ...mediaContext,
          ...props,
        }}
        tone={isSelected ? (tone ?? ctx.tone) : 'neutral'}
        disabled={props.disabled}
        isSelected={isSelected}
        {...iconsPosition}
      >
        <ChipFrame
          theme={isSelected ? ((tone ?? ctx.tone) as ThemeName) : 'neutral'}
          tone={isSelected ? (tone ?? ctx.tone) : 'neutral'}
          isSelected={isSelected}
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
          {...mediaContext}
          {...props}
          ref={ref}
        >
          {children}
        </ChipFrame>
      </ChipContext.Provider>
    );
  },
  {
    disableTheme: true,
  },
);

const Chip = withStaticProperties(ChipComponent, {
  Text: ChipText,
  Icon: ChipIcon,
});

export const Chips = withStaticProperties(ChipsComponent, {
  Item: Chip,
});
