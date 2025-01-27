import type { XZKUIInputProps } from '../input/input.types';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

export interface XZKUIFieldContextValues {
  error?: boolean;
  id?: string;
}

export interface XZKUIFieldProps {
  children: ReactNode;
  className?: string;
  label?: ReactNode;
  labelValue?: ReactNode;
  error?: ReactNode;
  errorValue?: ReactNode;
  hint?: ReactNode;
  hintValue?: ReactNode;
}

export type XZKUIFieldContextCallback = (context: XZKUIFieldContextValues) => ReactNode;

export interface XZKUIFieldControlPropsWithCallback {
  render?: XZKUIFieldContextCallback;
}

export type XZKUIFieldControlPropsWithElement<T extends ElementType> = {
  render?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'render'>;

export type XZKUIFieldControlPropsDefault = {
  render?: never;
} & XZKUIInputProps;

export type XZKUIFieldControlProps<T extends ElementType> =
  | XZKUIFieldControlPropsWithCallback
  | XZKUIFieldControlPropsWithElement<T>
  | XZKUIFieldControlPropsDefault;
