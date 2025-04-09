import type { BUTTON_COMPONENT_NAME } from './button.constants';
import type { ButtonFrame } from './button.styled';
import type { GetProps, StylableComponent, VariantSpreadExtras } from '@tamagui/core';
import type { IconProp, IconsPosition } from '@xsolla-zk-ui/react/types/icon';
import type { GetComponentTone } from '@xsolla-zk-ui/react/types/theme';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type ButtonSizes = keyof ComponentsConfig['button'];
export type ButtonTone = GetComponentTone<typeof BUTTON_COMPONENT_NAME>;
export type ButtonVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<
  GetProps<T> & ButtonContextType
>;

export type ButtonContextType = Partial<IconsPosition> & {
  size: ButtonSizes;
  disabled: boolean;
  variant: ButtonVariants;
  tone: ButtonTone;
};

type ButtonSharedProps = GetProps<typeof ButtonFrame>;

export interface ButtonProps extends ButtonSharedProps {
  icon?: IconProp;
  tone?: ButtonTone;
  iconAfter?: IconProp;
}
