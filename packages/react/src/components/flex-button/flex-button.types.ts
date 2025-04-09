import type { FLEX_BUTTON_COMPONENT_NAME } from './flex-button.constants';
import type { FlexButtonFrame } from './flex-button.styled';
import type { GetProps } from '@tamagui/core';
import type { GetComponentTone } from '@xsolla-zk-ui/react/types/theme';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';

export type FlexButtonTone = GetComponentTone<typeof FLEX_BUTTON_COMPONENT_NAME>;

export type FlexButtonSizes = keyof ComponentsConfig['flexButton'];

export type FlexButtonContextType = {
  size: FlexButtonSizes;
  tone: FlexButtonTone;
  disabled: boolean;
};

export type FlexButtonSharedProps = GetProps<typeof FlexButtonFrame>;

export interface FlexButtonProps extends FlexButtonSharedProps {
  tone?: FlexButtonTone;
}
