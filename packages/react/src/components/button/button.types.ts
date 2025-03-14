import type { ButtonFrame } from './button.styled';
import type { BUTTON_COMPONENT_NAME } from './button.theme';
import type { GetProps, ThemeName, VariantSpreadExtras, StylableComponent } from '@tamagui/core';
import type { ExtractSubthemeKeys } from '@xsolla-zk-ui/react/types/helpers';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type ButtonSizes = keyof ComponentsConfig['button'];
export type ButtonTone = ExtractSubthemeKeys<ThemeName, typeof BUTTON_COMPONENT_NAME>;
export type ButtonVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<
  GetProps<T> & ButtonContextType
>;

export type ButtonContextType = {
  size: ButtonSizes;
  disabled: boolean;
  variant: ButtonVariants;
  tone: 'brand' | ButtonTone;
};

type ButtonSharedProps = GetProps<typeof ButtonFrame>;

export interface ButtonProps extends ButtonSharedProps {
  tone?: ButtonTone;
}
