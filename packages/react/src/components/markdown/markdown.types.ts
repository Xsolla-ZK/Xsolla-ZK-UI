import type { MarkdownFrame } from './markdown.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';

export type MarkdownVariant = keyof ComponentsConfig['markdown'] | (string & {});

export type MarkdownProps = GetProps<typeof MarkdownFrame>;
