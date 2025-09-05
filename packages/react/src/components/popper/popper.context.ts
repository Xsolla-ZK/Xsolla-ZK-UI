import { createStyledContext } from '@tamagui/core';
import type { PopperContextSlowValue, PopperContextValue } from './popper.types';

export const PopperContextFast = createStyledContext<PopperContextValue>(
  // since we always provide this we can avoid setting here
  {} as PopperContextValue,
  'Popper__',
);

export const PopperContextSlow = createStyledContext<PopperContextSlowValue>(
  // since we always provide this we can avoid setting here
  {} as PopperContextValue,
  'PopperSlow__',
);

export const PopperPositionContext = createStyledContext;

export const { useStyledContext: usePopperContext, Provider: PopperProviderFast } =
  PopperContextFast;

export const { useStyledContext: usePopperContextSlow, Provider: PopperProviderSlow } =
  PopperContextSlow;
