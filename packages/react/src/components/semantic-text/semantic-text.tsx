import { css } from '@emotion/react';
import Styled from './semantic-text.styled';
import type { XZKUISemanticTextProps } from './semantic-text.types';
import type { ElementType } from 'react';

function XZKUISemanticText<T extends ElementType>({
  as: Component,
  variant = 'paragraphMd',
  children,
  align,
  color,
  className,
}: XZKUISemanticTextProps<T>) {
  return (
    <Styled.Main
      as={Component}
      className={className}
      xzkuiVariant={variant}
      css={css`
        text-align: ${align || ''};
        color: ${color || ''};
      `}
    >
      {children}
    </Styled.Main>
  );
}

export default XZKUISemanticText;
