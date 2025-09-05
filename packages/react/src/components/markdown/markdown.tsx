import { SemanticText } from '../semantic-text';
import { MarkdownFrame } from './markdown.styled';
import type { MarkdownProps } from './markdown.types';

export const Markdown = MarkdownFrame.styleable<MarkdownProps>(
  ({ variant = 'p', children, ...props }, ref) => {
    if (variant === 'image') {
      return (
        <MarkdownFrame variant={variant} {...props} ref={ref}>
          {children}
        </MarkdownFrame>
      );
    }

    const content = () => {
      if (variant === 'h1') {
        return (
          <SemanticText tag="h1" variant="headerXl">
            {children}
          </SemanticText>
        );
      }

      if (variant === 'h2') {
        return (
          <SemanticText tag="h2" variant="headerL">
            {children}
          </SemanticText>
        );
      }

      if (variant === 'h3') {
        return (
          <SemanticText tag="h3" variant="headerM">
            {children}
          </SemanticText>
        );
      }

      if (variant === 'h4') {
        return (
          <SemanticText tag="h4" variant="headerS">
            {children}
          </SemanticText>
        );
      }

      if (variant === 'h5') {
        return (
          <SemanticText tag="h5" variant="headerXs">
            {children}
          </SemanticText>
        );
      }

      if (variant === 'p') {
        return (
          <SemanticText tag="p" variant="paragraphM">
            {children}
          </SemanticText>
        );
      }
    };

    return (
      <MarkdownFrame variant={variant} {...props} ref={ref}>
        {content()}
      </MarkdownFrame>
    );
  },
);
