import type semanticTextTheme from './semantic-text.theme';
import type { XZKUICustomColor } from '@xsolla-zk-ui/react/types/theme';
import type { CSSProperties, ElementType, ReactNode } from 'react';

type Variants = keyof ReturnType<typeof semanticTextTheme>['variants'];

export interface XZKUISemanticTextBaseProps {
  variant: Variants;
  color?: XZKUICustomColor;
}

export interface XZKUISemanticTextProps<T extends ElementType>
  extends Partial<XZKUISemanticTextBaseProps> {
  children?: ReactNode;
  align?: CSSProperties['textAlign'];
  className?: string;
  as?: T;
}
