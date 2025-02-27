import type { SemanticTextRoot } from './semantic-text.styled';
import type { GetProps } from '@tamagui/core';

type TextProps = GetProps<typeof SemanticTextRoot>;

export interface SemanticTextProps extends TextProps {}
