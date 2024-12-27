import type semanticTextTheme from './semantic-text.theme';
import type { CSSProperties, ElementType, ReactNode } from 'react';

type Variants = keyof ReturnType<typeof semanticTextTheme>['variants'];

export interface XZKUISemanticTextBaseProps {
  variant: Variants;
}

export interface XZKUISemanticTextProps<T extends ElementType>
  extends Partial<XZKUISemanticTextBaseProps> {
  children?: ReactNode;
  align?: CSSProperties['textAlign'];
  color?: CSSProperties['color'];
  className?: string;
  as?: T;
}
