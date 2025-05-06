import type { FieldFrame } from './field.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import type { ReactNode } from 'react';

export type FieldSizes = keyof ComponentsConfig['field'];

export type FieldContextType = {
  id?: string;
  error?: boolean;
  size: FieldSizes;
};

export type FieldSharedProps = GetProps<typeof FieldFrame>;

export type FieldProps = FieldSharedProps & {
  children?: ReactNode;
};
