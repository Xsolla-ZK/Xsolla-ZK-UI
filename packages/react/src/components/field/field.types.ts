import type { FieldFrame, FieldHintValue, FieldHint, FieldRow, FieldLabel } from './field.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';
import type { ReactNode } from 'react';

export type FieldSizes = keyof ComponentsConfig['field'] | (string & {});

export type FieldContextType = {
  id?: string;
  error?: boolean;
  size: FieldSizes;
};

export type FieldSharedProps = GetProps<typeof FieldFrame>;

export type FieldProps = FieldSharedProps & {
  children?: ReactNode;
};

export type FieldLabelProps = GetProps<typeof FieldLabel>;

export type FieldRowProps = GetProps<typeof FieldRow>;

export type FieldHintProps = GetProps<typeof FieldHint>;

export type FieldHintValueProps = GetProps<typeof FieldHintValue>;
