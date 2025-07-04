import type { SemanticTextRoot } from './semantic-text.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';
export type SemanticTextVariants = keyof ComponentsConfig['semanticText'];
type TextProps = GetProps<typeof SemanticTextRoot>;
export interface SemanticTextBaseProps {
    typographyOnly?: boolean;
}
export interface SemanticTextProps extends TextProps, SemanticTextBaseProps {
}
export {};
//# sourceMappingURL=semantic-text.types.d.ts.map