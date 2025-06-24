import type { ButtonFrame } from './button.styled';
import type { IconsPosition, GetComponentTone } from '../../types';
import type { ComponentsConfig } from '../../utils';
import type { GetProps, StylableComponent, VariantSpreadExtras } from '@tamagui/core';
import type { BUTTON_COMPONENT_NAME } from '@xsolla-zk/constants';
export type ButtonVariants = 'primary' | 'secondary' | 'tertiary';
export type ButtonSizes = keyof ComponentsConfig['button'] | (string & {});
export type ButtonTone = GetComponentTone<typeof BUTTON_COMPONENT_NAME>;
export type ButtonVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<GetProps<T> & ButtonContextType>;
export type ButtonContextType = Partial<IconsPosition> & {
    size: ButtonSizes;
    disabled: boolean;
    variant: ButtonVariants;
    tone: ButtonTone;
};
type ButtonSharedProps = GetProps<typeof ButtonFrame>;
export type ButtonProps = ButtonSharedProps & {};
export {};
//# sourceMappingURL=button.types.d.ts.map