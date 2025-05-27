import type { InlineInputElement } from './inline-input.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';

export type InlineInputSizes = keyof ComponentsConfig['inlineInput'] | (string & {});

export type InlineInputProps = GetProps<typeof InlineInputElement>;
