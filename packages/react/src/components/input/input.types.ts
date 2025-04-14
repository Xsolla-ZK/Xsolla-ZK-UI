import type { InputElement, InputFrame } from './input.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import type { ReactNode } from 'react';

export type InputSizes = keyof ComponentsConfig['input'];

export type InputContextType = {
  size: InputSizes;
  error: boolean;
};

export type InputSharedProps = GetProps<typeof InputFrame>;
export type InputElementProps = GetProps<typeof InputElement>;

export interface InputProps extends InputElementProps {
  size?: InputSizes;
  children?: ReactNode;
  error?: boolean;
}
