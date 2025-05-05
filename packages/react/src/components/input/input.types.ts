import type { InputElement } from './input.styled';
import type { GetProps, StylableComponent, VariantSpreadExtras } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import type { ComponentProps, HTMLInputTypeAttribute, ReactNode } from 'react';
import type { TextInputProps } from 'react-native';

export type InputSizes = keyof ComponentsConfig['input'];

export type InputContextType = {
  size: InputSizes;
  error: boolean;
  disabled: boolean;
  focused: boolean;
};

export type InputVariantSpreadExtras<T extends StylableComponent> = VariantSpreadExtras<
  GetProps<T> & InputContextType
>;

export interface InputFrameProps {
  size?: InputSizes;
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

export type InputElementProps = DetailedInputProps &
  GetProps<typeof InputElement> &
  Omit<TextInputProps, ExcludePropsUnion> & {
    type?: HTMLInputTypeAttribute;
    rows?: number;
    minRows?: number;
    maxRows?: number;
    tag?: 'input' | 'textarea';
  };

export interface InputProps extends InputElementProps {
  size?: InputSizes;
  children?: ReactNode;
  error?: boolean;
  placeholderTextColor?: string;
  selectionColor?: string;
  caretColor?: string;
}
