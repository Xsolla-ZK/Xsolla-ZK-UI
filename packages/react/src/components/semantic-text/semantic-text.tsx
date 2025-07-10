import { forwardRef } from 'react';
import { SemanticTextRoot } from './semantic-text.styled';
import type { SemanticTextProps } from './semantic-text.types';
import type { TamaguiTextElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

export const SemanticText = SemanticTextRoot.styleable<SemanticTextProps>(
  forwardRef((props, ref: ForwardedRef<TamaguiTextElement>) => (
    <SemanticTextRoot {...props} ref={ref} />
  )),
);
