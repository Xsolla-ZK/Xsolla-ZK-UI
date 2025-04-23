import type { InputNewElement } from './input-new.styled';
import type { GetProps, StylableComponent, TextProps, VariantSpreadExtras } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import type { ComponentProps, HTMLInputTypeAttribute, ReactNode } from 'react';
import type { TextInputProps } from 'react-native';

export type InputNewSizes = keyof ComponentsConfig['input'];

export type InputNewContextType = {
  size: InputNewSizes;
  error: boolean;
  disabled: boolean;
  // minRows: number;
  // maxRows: number;
};

export type InputNewVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<
  GetProps<T> & InputNewContextType
>;

export interface InputNewFrameProps {
  size?: InputNewSizes;
  error?: boolean;
  disabled?: boolean;
  focused?: boolean;
}

type ExcludePropsUnion =
  | 'secureTextEntry'
  | 'onChangeText'
  | 'editable'
  | 'keyboardType'
  | 'placeholderTextColor'
  | 'selectionColor'
  | 'numberOfLines'
  | 'multiline';

type DetailedInputProps = Omit<
  ComponentProps<'input'>,
  'className' | 'children' | 'value' | 'size' | ExcludePropsUnion
>;

export type InputNewElementProps = DetailedInputProps &
  GetProps<typeof InputNewElement> &
  Omit<TextInputProps, ExcludePropsUnion> & {
    type?: HTMLInputTypeAttribute;
    rows?: number;
    minRows?: number;
    maxRows?: number;
    tag?: 'input' | 'textarea';
  };

export interface InputNewProps extends InputNewElementProps {
  size?: InputNewSizes;
  children?: ReactNode;
  error?: boolean;
  placeholderTextColor?: string;
  selectionColor?: string;
  caretColor?: string;
}
