import type { FLEX_BUTTON_COMPONENT_NAME } from './flex-button.constants';
import type { FlexButtonFrame } from './flex-button.styled';
import type { GetProps, Themes } from '@tamagui/core';
import type { ExtractSubthemeKeys } from '@xsolla-zk-ui/react/types/helpers';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';

export type FlexButtonVariants = 'primary' | 'secondary';
export type FlexButtonTone =
  | 'brand'
  | ExtractSubthemeKeys<keyof Themes, typeof FLEX_BUTTON_COMPONENT_NAME>;

export type FlexButtonSizes = keyof ComponentsConfig['flexButton'];

export type FlexButtonContextType = {
  size: FlexButtonSizes;
  variant: FlexButtonVariants;
};

export type FlexButtonSharedProps = GetProps<typeof FlexButtonFrame>;

export interface FlexButtonProps extends FlexButtonSharedProps {
  tone?: FlexButtonTone;
}
