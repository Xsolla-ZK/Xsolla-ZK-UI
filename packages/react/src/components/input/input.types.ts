import type { Input } from './input.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';

export type InputSizes = keyof ComponentsConfig['input'];

export type InputSharedProps = GetProps<typeof Input>;

export interface InputProps extends InputSharedProps {}
