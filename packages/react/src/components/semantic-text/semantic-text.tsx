import { css } from '@emotion/react';
import Styled from './semantic-text.styled';
import type { XZKUISemanticTextProps } from './semantic-text.types';
import type { ExcludeStartsWith } from '@xsolla-zk-ui/react/types/helpers';
import type { ElementType } from 'react';

function XZKUISemanticText<T extends ElementType>({
  as,
  variant = 'paragraphMd',
  children,
  align,
  color,
  value,
  className,
}: XZKUISemanticTextProps<T>) {
  const component =
    as || variant.startsWith('paragraph')
      ? 'p'
      : (variant as ExcludeStartsWith<typeof variant, 'paragraph'>);
  return (
    <Styled.Main
      as={component}
      className={className}
      xzkuiVariant={variant}
      css={css`
        justify-content: ${value ? 'space-between' : align || ''};
        color: ${color || ''};
      `}
    >
      {children}
      {value && <Styled.Value>{value}</Styled.Value>}
    </Styled.Main>
  );
}

export default XZKUISemanticText;
