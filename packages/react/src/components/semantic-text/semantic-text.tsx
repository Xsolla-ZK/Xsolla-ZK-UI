import { SemanticTextRoot } from './semantic-text.styled';
import type { SemanticTextProps } from './semantic-text.types';
import type { TamaguiTextElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

export const SemanticText = SemanticTextRoot.styleable(
  (props: SemanticTextProps, ref: ForwardedRef<TamaguiTextElement>) => (
    <SemanticTextRoot {...props} ref={ref} />
  ),
);
