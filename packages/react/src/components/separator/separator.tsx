import type { XZKUISeparatorProps } from './separator.types';
import Styled from './separator.styled';

function XZKUISeparator({ children }: XZKUISeparatorProps) {
  return (
    <Styled.Main>{children}</Styled.Main>
  );
}

export default XZKUISeparator;
