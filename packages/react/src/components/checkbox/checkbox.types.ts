import type { CheckboxFrame } from './checkbox.styled';
import type { CheckboxExtraProps, CheckedState } from '@tamagui/checkbox-headless';
import type { GetProps, NativeValue, StylableComponent, VariantSpreadExtras } from '@tamagui/core';
import type { XORIconProps } from '@xsolla-zk/react/types/icon';
import type { ComponentsConfig } from '@xsolla-zk/react/utils/components-config';

export type CheckboxSizes = keyof ComponentsConfig['checkbox'];
export type CheckboxVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<
  GetProps<T> & CheckboxContextType
>;

export type CheckboxContextType = {
  size: CheckboxSizes;
  checked: CheckedState;
  disabled?: boolean;
};

type CheckboxSharedProps = GetProps<typeof CheckboxFrame>;

export type CheckboxProps = CheckboxSharedProps &
  CheckboxExtraProps & {
    native?: NativeValue<'web'>;
  };

type CheckboxIndicatorExtraProps = {
  /**
   * Used to force mounting when more control is needed. Useful when
   * controlling animation with React animation libraries.
   */
  forceMount?: boolean;
  /**
   * Used to disable passing styles down to children.
   */
  disablePassStyles?: boolean;
};

export type CheckboxIndicatorProps = XORIconProps & CheckboxIndicatorExtraProps;
