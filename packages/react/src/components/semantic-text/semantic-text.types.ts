import type { SemanticTextRoot } from './semantic-text.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils/components-config';

export type SemanticTextVariants = keyof ComponentsConfig['semanticText'];

type TextProps = GetProps<typeof SemanticTextRoot>;

export interface SemanticTextProps extends TextProps {}
