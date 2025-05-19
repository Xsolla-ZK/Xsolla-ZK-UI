import type { InlineInputElement } from './inline-input.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils';

export type InlineInputSizes = keyof ComponentsConfig['inlineInput'];

export type InlineInputProps = GetProps<typeof InlineInputElement>;
