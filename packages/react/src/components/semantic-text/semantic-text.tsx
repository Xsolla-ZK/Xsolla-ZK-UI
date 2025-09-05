import { SemanticTextRoot } from './semantic-text.styled';
import type { SemanticTextProps } from './semantic-text.types';

export const SemanticText = SemanticTextRoot.styleable<SemanticTextProps>((props, ref) => (
  <SemanticTextRoot {...props} ref={ref} />
));
