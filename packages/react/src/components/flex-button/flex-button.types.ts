import type { FlexButtonFrame } from './flex-button.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';

export type FlexButtonSizes = keyof ComponentsConfig['flexButton'];

export type FlexButtonContextType = {
  size: FlexButtonSizes;
};

export type FlexButtonSharedProps = GetProps<typeof FlexButtonFrame>;

export interface FlexButtonProps extends FlexButtonSharedProps {}
