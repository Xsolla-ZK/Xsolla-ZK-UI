import type { SwitchFrame } from './switch.styled';
import type { GetProps, NativeValue, StackProps } from '@tamagui/core';
import type {
  SwitchExtraProps as HeadlessSwitchExtraProps,
  SwitchState,
} from '@tamagui/switch-headless';
import type { BoundProps } from '@xsolla-zk/react/types/helpers';
import type { ComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import type { SwitchProps as NativeSwitchProps } from 'react-native';

export type SwitchSizes = keyof ComponentsConfig['switchComponent'];

export type SwitchContextType = {
  size: SwitchSizes;
  checked: SwitchState;
  disabled?: boolean;
};

export type SwitchSharedProps = GetProps<typeof SwitchFrame>;

export type SwitchExtraProps = BoundProps<HeadlessSwitchExtraProps, 'onCheckedChange'> & {
  native?: NativeValue<'mobile' | 'ios' | 'android'>;
  nativeProps?: NativeSwitchProps;
};

export type SwitchProps = SwitchSharedProps & SwitchExtraProps;

export type SwitchKnobProps = StackProps & SwitchSharedProps;
