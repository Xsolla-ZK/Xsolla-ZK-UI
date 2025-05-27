import type { RadioGroupFrame, RadioGroupItemFrame } from './radio-group.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps, StylableComponent, VariantSpreadExtras } from '@tamagui/core';
import type { RadioGroupItemContextValue } from '@tamagui/radio-headless';
import type { HTMLProps, ReactElement } from 'react';

export type RadioGroupSizes = keyof ComponentsConfig['radio'] | (string & {});
export type RadioGroupVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<
  GetProps<T> & RadioGroupContextType
>;

export type RadioGroupContextType = RadioGroupItemContextValue & {
  size: RadioGroupSizes;
};

type RadioGroupSharedProps = GetProps<typeof RadioGroupFrame>;

export type RadioGroupProps = RadioGroupSharedProps & {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  native?: boolean;
  accentColor?: string;
};

type RadioGroupIndicatorExtraProps = {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: boolean;
};

export type RadioGroupIndicatorProps = RadioGroupIndicatorExtraProps;

export type RadioGroupItemProps = GetProps<typeof RadioGroupItemFrame> & {
  value: string;
  id?: string;
  labelledBy?: string;
  disabled?: boolean;
  onKeyDown?: HTMLProps<ReactElement>['onKeyDown'];
};
