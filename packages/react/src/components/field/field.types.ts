import type { FieldFrame } from './field.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils/components-config';

export type FieldSizes = keyof ComponentsConfig['field'];

export type FieldContextType = {
  error?: boolean;
  id?: string;
  size: FieldSizes;
};

export type FieldSharedProps = GetProps<typeof FieldFrame>;

export interface FieldProps extends FieldSharedProps {}
