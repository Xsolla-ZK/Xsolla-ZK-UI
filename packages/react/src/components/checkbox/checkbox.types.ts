import type { checkboxComponentConfig, CheckboxFrame } from './checkbox.styled';
import type { CheckboxExtraProps, CheckedState } from '@tamagui/checkbox-headless';
import type { GetProps, NativeValue } from '@tamagui/core';
import type { XORIconProps } from '@xsolla-zk-ui/react/types/icon';

export type CheckboxSizes = keyof typeof checkboxComponentConfig;

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
